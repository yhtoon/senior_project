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
  import React, { useState, useEffect } from "react";
  
  import {CAND_INFO} from 'types';

  interface CandInfoProps {
    CAND_ID_A: string,
    CAND_ID_B: string,
  }

  //check be for this 
  const CandInfo: React.FC<CandInfoProps> = ({
    CAND_ID_A,
    CAND_ID_B,
  }) => {

    const [CandidateMasterA, setCandidateMasterA] = useState<CAND_INFO>();
    const [CandidateMasterB, setCandidateMasterB] = useState<CAND_INFO>();

    useEffect(() => {
      fetch(`/getCandidateMaster/${CAND_ID_A}`).then(
        response => response.json()
      ).then(
        data => { 
          setCandidateMasterA(data.Item);
        }
      )
    }, [CAND_ID_A]);
    
    useEffect(() => {
      fetch(`/getCandidateMaster/${CAND_ID_B}`).then(
        response => response.json()
      ).then(
        data => { 
          setCandidateMasterB(data.Item);
        }
      )
    }, [CAND_ID_B]);

    return CandidateMasterA && CandidateMasterB ? (
        <Card>
          <Card.Section>
            <Text variant="headingMd" as="h6">
              Candidate/Competitor Comparison
            </Text>
            <p>
              <Text variant="headingSm" as="h6">
                Candidate Name
              </Text>
            </p>
            <Stack>
              <Stack.Item fill>
                {CandidateMasterA.CAND_NAME}
              </Stack.Item>
              <Stack.Item>
                {CandidateMasterB.CAND_NAME}
              </Stack.Item>
            </Stack>
            <p>
              <Text variant="headingSm" as="h6">
                Party Affiliation
              </Text>
            </p>
            <Stack>
              <Stack.Item fill>
                {CandidateMasterA.CAND_PTY_AFFILIATION}
              </Stack.Item>
              <Stack.Item>
                {CandidateMasterB.CAND_PTY_AFFILIATION || '-'}
              </Stack.Item>
            </Stack>
            <p>
              <Text variant="headingSm" as="h6">
                Candidate Office
              </Text>
            </p>
            <Stack>
              <Stack.Item fill>
                {CandidateMasterA.CAND_OFFICE}
              </Stack.Item>
              <Stack.Item>
                {CandidateMasterB.CAND_OFFICE}
              </Stack.Item>
            </Stack>
            <p>
              <Text variant="headingSm" as="h6">
                Candidate District
              </Text>
            <Stack>
              <Stack.Item fill>
                {CandidateMasterA.CAND_OFFICE_DISTRICT}
              </Stack.Item>
              <Stack.Item>
                {CandidateMasterB.CAND_OFFICE_DISTRICT}
              </Stack.Item>
            </Stack>
            <p>
              <Text variant="headingSm" as="h6">
                Candidate Location
              </Text>
            </p>
            <Stack>
              <Stack.Item fill>
                {CandidateMasterA.CAND_OFFICE_ST}
              </Stack.Item>
              <Stack.Item>
                {CandidateMasterB.CAND_OFFICE_ST}
              </Stack.Item>
            </Stack>
            </p>
            <p>
              <Text variant="headingSm" as="h6">
                Year of Election
              </Text>
            </p>
            <Stack>
              <Stack.Item fill>
                {CandidateMasterA.CAND_ELECTION_YR}
              </Stack.Item>
              <Stack.Item>
                {CandidateMasterB.CAND_ELECTION_YR}
              </Stack.Item>
            </Stack>
            <p>
              <Text variant="headingSm" as="h6">
                Incumbent Challenger Status
              </Text>
            </p>
            <Stack>
              <Stack.Item fill>
                {CandidateMasterA.CAND_ICI}
              </Stack.Item>
              <Stack.Item>
                {CandidateMasterB.CAND_ICI}
              </Stack.Item>
            </Stack>
            <p>
              <Text variant="headingSm" as="h6">
                Principal Campaign Committee
              </Text>
            </p>
            <Stack>
              <Stack.Item fill>
                {CandidateMasterA.CAND_PCC}
              </Stack.Item>
              <Stack.Item>
                {CandidateMasterB.CAND_PCC}
              </Stack.Item>
            </Stack>
          </Card.Section>
        </Card>
    ) : <div></div>;
  };
  export default CandInfo;
  