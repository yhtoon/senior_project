import {
    Button,
    Modal,
    Stack,
    DropZone,
    Checkbox,
    Badge,
    Text,
    Card,
    DataTable,
    TextContainer
  } from "@shopify/polaris";
  import React, { useState, useCallback, useEffect } from "react";
  
  import {CommieInfoModal} from 'types';

  
  interface CommieInfoProps {
    COMM_ID: string
  }

  const CommieInfo: React.FC<CommieInfoProps> = ({COMM_ID}) => {

    const [CommieMaster, setCommieMaster] = useState<CommieInfoModal>();

    useEffect(() => {
      fetch(`/getCommieMaster/${COMM_ID}`).then(
        response => response.json()
      ).then(
        data => { 
          setCommieMaster(data.Item);
        }
      )
    }, [COMM_ID]);
//data is response and item holds whats from response - note forself 
    return (
      <Stack.Item>         
        <Card>
          <Text variant="headingMd" as="h6">
            Committee Information
          </Text>
          <Card.Section>
            <Text variant="headingSm" as="h6">
              Committee ID
            </Text>
            {COMM_ID} 
            <p>
              <Text variant="headingSm" as="h6">
              Committee Name
              </Text>
            </p>
            <p>  {CommieMaster ? CommieMaster.CMTE_NM  : ""} </p>
            <p>
              <Text variant="headingSm" as="h6">
                Treasurer's Name
              </Text>
            </p>
            <p>{CommieMaster ? CommieMaster.TRES_NM  : ""}</p>
            <p>
              <Text variant="headingSm" as="h6">
                Location
              </Text>
            </p>
            <p>{CommieMaster ? (CommieMaster.CMTE_CITY + "," + CommieMaster.CMTE_ST)  : ""}</p>
            <p>
              <Text variant="headingSm" as="h6">
                Committee Design
              </Text>
            </p>
            <p>{CommieMaster ? CommieMaster.CMTE_DSGN : ""}</p>
            <p>
              <Text variant="headingSm" as="h6">
                Committee Type
              </Text>
            </p>
            <p>{CommieMaster ? CommieMaster.CMTE_TP : ""}</p>
            <p>
              <Text variant="headingSm" as="h6">
                Committee Party Affiliation
              </Text>
            </p>
            <p>{CommieMaster ? CommieMaster.CMTE_PTY_AFFILIATION : ""}</p>
            <p>
              <Text variant="headingSm" as="h6">
                Organization Type
              </Text>
            </p>
            <p>{CommieMaster ? CommieMaster.ORG_TP : ""}</p>
            <p>
              <Text variant="headingSm" as="h6">
                Organization Type
              </Text>
            </p>
            <p>{CommieMaster ? CommieMaster.CONNECTED_ORG_NM : ""}</p>
          </Card.Section>
        </Card>
      </Stack.Item>
    );
  };
  
  export default CommieInfo;
  