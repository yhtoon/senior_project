import {
  Stack,
  Text,
  Card,
} from "@shopify/polaris";
import React, { useState, useEffect } from "react";
import {CommieInfoModal} from 'types';
  
interface CommieInfoProps {
  COMM_ID: string,
}

const CommieInfo: React.FC<CommieInfoProps> = ({
  COMM_ID
}) => {
  const [CommieMaster, setCommieMaster] = useState<CommieInfoModal>();
  console.log('a')
  useEffect(() => {
    fetch(`/getCommieMaster/${COMM_ID}`).then(
      response => response.json()
    ).then(
      data => { 
        setCommieMaster(data.Item);
      }
    )
  }, [COMM_ID]);

  return CommieMaster ? (
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
          <p>  {CommieMaster.CMTE_NM} </p>
          <p>
            <Text variant="headingSm" as="h6">
              Treasurer's Name
            </Text>
          </p>
          <p>{CommieMaster.TRES_NM}</p>
          <p>
            <Text variant="headingSm" as="h6">
              Location
            </Text>
          </p>
          <p>{(CommieMaster.CMTE_CITY + "," + CommieMaster.CMTE_ST)}</p>
          <p>
            <Text variant="headingSm" as="h6">
              Committee Design
            </Text>
          </p>
          <p>{CommieMaster.CMTE_DSGN}</p>
          <p>
            <Text variant="headingSm" as="h6">
              Committee Type
            </Text>
          </p>
          <p>{CommieMaster.CMTE_TP}</p>
          <p>
            <Text variant="headingSm" as="h6">
              Committee Party Affiliation
            </Text>
          </p>
          <p>{CommieMaster.CMTE_PTY_AFFILIATION}</p>
          <p>
            <Text variant="headingSm" as="h6">
              Organization Type
            </Text>
          </p>
          <p>{CommieMaster.ORG_TP}</p>
          <p>
            <Text variant="headingSm" as="h6">
              Organization Type
            </Text>
          </p>
          <p>{CommieMaster.CONNECTED_ORG_NM}</p>
        </Card.Section>
      </Card>
    </Stack.Item>
  ) : <></>;
};

export default CommieInfo;
