import {
    Box,
    Stack,
    Text,
    TextContainer
} from "@shopify/polaris";
import React, { useState, useEffect } from "react";
import {CommieInfoModal, CAND_INFO} from 'types';

type name = "commie" | "competitor";

interface TitleProps {
  id: string, 
  flag: name, 
}
const Title: React.FC<TitleProps> = ({id, flag}) => {

  const [CommieMaster, setCommieMaster] = useState<CommieInfoModal>();
  const [CandidateMaster, setCandidateMaster] = useState<CAND_INFO>();

  useEffect(() => {
    if (flag === 'competitor') {
      fetch(`/getCandidateMaster/${id}`).then(
        response => response.json()
      ).then(
        data => { 
          setCandidateMaster(data.Item);
        }
      )
    }
    else {
      fetch(`/getCommieMaster/${id}`).then(
        response => response.json()
      ).then(
        data => { 
          setCommieMaster(data.Item);
        }
      )
    }
  }, [id]);

  return (
    <Stack.Item>
      <Box padding="3" paddingTop="0">
        <TextContainer>
          <Text variant="headingMd" as="h2">
          {(flag === 'commie' ? (CommieMaster ? CommieMaster.CMTE_NM  : "") : (CandidateMaster ? CandidateMaster.CAND_NAME  : ""))}
          </Text>
          <p>
          {(flag === 'commie' ? (CommieMaster ? "The table below displays the committee's top recipients." : "") : (CandidateMaster ? "The table below displays the candidate's competitors."  : ""))}
          </p>
        </TextContainer>
      </Box>
    </Stack.Item>
  );
};

export default Title;