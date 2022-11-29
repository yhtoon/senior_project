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

type name = "commie" | "competitor";
type cand = "cand" | "comp";
interface ModalProps {
  id: string
  flag: name
  cand_type: cand
}

const ModalInfo: React.FC<ModalProps> = ({ id, flag, cand_type }) => {
  const [active, setActive] = useState(true);
  const [checked, setChecked] = useState(false);
  // const [CommieMaster, setCommieMaster] = useState<CommieInfoModal>();

  
  const toggleActive = useCallback(() => setActive((active) => !active), []);

  //const handleCheckbox = useCallback((value) => setChecked(value), []);

  const activator = <Button fullWidth onClick={toggleActive}>View Competitor Analysis</Button>;

  return (
    <div style={{ height: "500px" }}>
      <Modal
        large
        activator={activator}
        open={active}
        onClose={toggleActive}
        title={(flag === 'commie' ? "Committee Info" : "Competitor Analysis")}

      >
        <Modal.Section>
          <Stack wrap={false} distribution="fillEvenly">
            <Left id={id} flag={flag}/>
            <Right id={id} flag={flag} cand_type={cand_type}/>
          </Stack>
        </Modal.Section>
      </Modal>
    </div>
  );
};

export default ModalInfo;
