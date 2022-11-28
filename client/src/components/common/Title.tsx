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
      fetch(`/getCommieMaster/${id}`).then(
        response => response.json()
      ).then(
        data => { 
          setCommieMaster(data.Item);
        }
      )
    }, [id]);

    useEffect(() => {
      fetch(`/getCandidateMaster/${id}`).then(
        response => response.json()
      ).then(
        data => { 
          setCommieMaster(data.Item);
        }
      )
    }, [id]);
 
    return (
      <Stack.Item>
        <TextContainer>
          <Text variant="headingMd" as="h2">
          {(flag === 'commie' ? (CommieMaster ? CommieMaster.CMTE_NM  : "") : (CandidateMaster ? CandidateMaster.CAND_NAME  : ""))}
          </Text>
          <p>
          {(flag === 'commie' ? (CommieMaster ? "The table below displays the committee's top recipients." : "") : (CandidateMaster ? "The table below displays the candidate's competitors."  : ""))}
          </p>
          <p></p>
        </TextContainer>
      </Stack.Item>
    );
  };
  
  export default Title;
  