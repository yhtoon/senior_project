import {
    Box,
    Button,
    Card,
    Stack,
    Text,
    TextContainer
} from "@shopify/polaris";
import React, { useState, useEffect } from "react";
import AnalyticsTable from "../analytics/AnalyticsTable"
import { CAND_INFO } from 'types';
import ModalInfo from "./Modal";
import {
  ArrowLeftMinor
} from '@shopify/polaris-icons';

interface AnalyticsProps {
  CAND_ID: string,
  setCandId: Function,
}

const AnalyticsPg: React.FC<AnalyticsProps> = ({
  CAND_ID,
  setCandId,
}) => {
  const [CandidateMaster, setCandidateMaster] = useState<CAND_INFO>();

  useEffect(() => {
    fetch(`/getCandidateMaster/${CAND_ID}`).then(
      response => response.json()
    ).then(
      data => { 
        setCandidateMaster(data.Item);
      }
    )
  }, [CAND_ID]);

  return (
    <Stack wrap={false} distribution="fill">
      <Stack.Item>
        <Box padding="3">
          <Box paddingBottom='3'>
            <Button
              icon={ArrowLeftMinor}
              onClick={() => setCandId('')}
              textAlign='center'
            >
              EXPLORE
            </Button>
          </Box>
          <Card>
            <Box padding="3">
              <TextContainer>
                <Text variant="heading4xl" as="h1">
                  Analytics Page
                </Text>
                <Text variant="headingMd" as="h1">
                  View top donors for the selected candidate by Individual, State, and Committee.
                </Text>
                <p>CANDIDATE: {CandidateMaster ? CandidateMaster.CAND_NAME  : ""}</p>
                <p>OFFICE: {CandidateMaster ? CandidateMaster.CAND_OFFICE  : ""}</p>
                <p>PARTY: {CandidateMaster ? CandidateMaster.CAND_PTY_AFFILIATION  : ""}</p>
              </TextContainer>
            </Box>
          </Card>
        </Box>
      </Stack.Item>
      <Stack.Item>
        <AnalyticsTable CAND_ID={CAND_ID}/>
        <Box padding='3'>
          <ModalInfo id={CAND_ID} flag="competitor" COMP_ID={CandidateMaster ? (CandidateMaster.CAND_ELECTION_YR+ CandidateMaster.CAND_OFFICE + CandidateMaster.CAND_OFFICE_ST + CandidateMaster.CAND_OFFICE_DISTRICT)  : ""}/>
        </Box>
      </Stack.Item>
    </Stack>
  );
}

export default AnalyticsPg;
