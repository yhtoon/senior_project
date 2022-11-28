import {
    Button,
    Modal,
    Stack,
    DropZone,
    Checkbox,
    Badge,
    Text,
    TextContainer
  } from "@shopify/polaris";
  import React, { useState, useCallback, useEffect } from "react";
  import { AppProvider } from "@shopify/polaris";
  import "@shopify/polaris/build/esm/styles.css";
  import Left from "../../pages/left_side";
  import Right from "../../pages/right_side";
  import {CommieInfoModal} from 'types';

type name = "commie" | "competitor";
interface ModalProps {
  id: string
  flag: name
}

const ModalInfo: React.FC<ModalProps> = ({ id, flag }) => {
  const [active, setActive] = useState(true);
  const [checked, setChecked] = useState(false);
  const [CommieMaster, setCommieMaster] = useState<CommieInfoModal>();

    useEffect(() => {
      fetch(`/getCommieMaster/${id}`).then(
        response => response.json()
      ).then(
        data => { 
          setCommieMaster(data.Item);
        }
      )
    }, [id]);
  const toggleActive = useCallback(() => setActive((active) => !active), []);

  //const handleCheckbox = useCallback((value) => setChecked(value), []);

  const activator = <Button onClick={toggleActive}>Open</Button>;

  return (
    <div style={{ height: "500px" }}>
      <Modal
        large
        activator={activator}
        open={active}
        onClose={toggleActive}
        title={CommieMaster ? CommieMaster.CMTE_NM  : ""}
      >
        <Modal.Section>
          <Stack wrap={false} distribution="fillEvenly">
            <Left id={id} flag={flag}/>
            <Right id={id} flag={flag}/>
          </Stack>
        </Modal.Section>
      </Modal>
    </div>
  );
};

export default ModalInfo;
