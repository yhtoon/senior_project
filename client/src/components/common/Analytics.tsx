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
  import AnalyticsTable from "../analytics/AnalyticsTable"
  import {CAND_INFO, AnalyticsIndividualResponse, AnalyticsStateResponse} from 'types';
import ModalInfo from "./Modal";

interface AnalyticsProps {
  CAND_ID: string,
  
}

const AnalyticsPg: React.FC<AnalyticsProps> = ({CAND_ID}) => {

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
    <div>
       <Stack wrap={false} distribution="fillEvenly">
       <Stack.Item>
      <TextContainer>
          <Text variant="heading4xl" as="h1">
            Analytics Page
            </Text>
          <Text variant="headingMd" as="h1">
            View top donors for the selected candidate by Individual, State, and Committee.
          </Text>
          <p>CANDIDATE: {CandidateMaster ? CandidateMaster.CAND_NAME  : ""}
          </p>
          <p>OFFICE: {CandidateMaster ? CandidateMaster.CAND_OFFICE  : ""}</p>
          <p>PARTY: {CandidateMaster ? CandidateMaster.CAND_PTY_AFFILIATION  : ""}</p>
        </TextContainer>
      </Stack.Item>
      <Stack.Item>
      <AnalyticsTable CAND_ID={CAND_ID}/>
<ModalInfo id={CAND_ID} flag="competitor" COMP_ID={CandidateMaster ? (CandidateMaster.CAND_ELECTION_YR+ CandidateMaster.CAND_OFFICE + CandidateMaster.CAND_OFFICE_ST + CandidateMaster.CAND_OFFICE_DISTRICT)  : ""} cand_type="cand" />
      </Stack.Item>
          </Stack>
      
    </div>
  );
};

export default AnalyticsPg;
