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
  
  import {CAND_INFO} from 'types';

  type cand = "cand" | "comp";

  interface CandInfoProps {
    id: string,
    cand_type: cand,
  }

  //check be for this 
  const CandInfo: React.FC<CandInfoProps> = ({id, cand_type}) => {

    const [CandidateMaster, setCandidateMaster] = useState<CAND_INFO>();

    useEffect(() => {
      fetch(`/getCandidateMaster/${id}`).then(
        response => response.json()
      ).then(
        data => { 
          setCandidateMaster(data.Item);
        }
      )
    }, [id]); 
    return (
        <Card>
          <Text variant="headingMd" as="h6">
          {(cand_type === 'cand') ? "Candidate Information" : "Competitor Information"}
          </Text>
          <Card.Section>
            <Text variant="headingSm" as="h6">
              Candidate Name
            </Text>
            <p>{CandidateMaster ? CandidateMaster.CAND_NAME  : ""}</p>
            <p>
              <Text variant="headingSm" as="h6">
                Party Affiliation
              </Text>
            </p>
            <p>{CandidateMaster ? CandidateMaster.CAND_PTY_AFFILIATION  : ""}</p>
            <p>
              <Text variant="headingSm" as="h6">
                Candidate Office
              </Text>
            </p>
            <p>{CandidateMaster ? (CandidateMaster.CAND_OFFICE)  : ""}</p>
            <p>
              <Text variant="headingSm" as="h6">
                Candidate District
              </Text>
              <p>
              <Text variant="headingSm" as="h6">
                Candidate Location
              </Text>
            </p>
            <p>{CandidateMaster ? (CandidateMaster.CAND_OFFICE_ST)  : ""}</p>
            </p>
            <p>{CandidateMaster ? (CandidateMaster.CAND_OFFICE_DISTRICT)  : ""}</p><p>
              <Text variant="headingSm" as="h6">
                Year of Election
              </Text>
            </p>
            <p>{CandidateMaster ? CandidateMaster.CAND_ELECTION_YR  : ""}</p>
            <p>
              <Text variant="headingSm" as="h6">
                Incumbent Challenger Status
              </Text>
            </p>
            <p>{CandidateMaster ? CandidateMaster.CAND_ICI  : ""}</p>
            <p>
              <Text variant="headingSm" as="h6">
                Principal Campaign Committee
              </Text>
            </p>
            <p>{CandidateMaster ? CandidateMaster.CAND_PCC  : ""}</p>
          </Card.Section>
        </Card>
    );
  };
  
  export default CandInfo;
  