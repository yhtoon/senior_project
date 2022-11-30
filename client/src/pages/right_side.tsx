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
import CandInfo from "../components/common/CandInfo";
import CommieInfo from "../components/common/CommieInfo";

type name = "commie" | "competitor";
type cand = "cand" | "comp";
interface RightProps {
  id: string
  flag: name
  cand_type: cand
  COMP_ID?: string
}

const Right: React.FC<RightProps> = ({id, flag, cand_type, COMP_ID}) => {
  return (
    <Stack.Item>
      <Card>
        <TextContainer spacing="loose">
          
          
        </TextContainer>
      </Card>(
      {COMP_ID && <><CandInfo id={id} cand_type={'cand'} /><CandInfo id={COMP_ID} cand_type={'comp'} /></>}
      {!COMP_ID && <CommieInfo COMM_ID={id}/>}
      {/* {(flag === 'commie') && <CommieInfo COMM_ID={id}/>}
      {(flag === 'competitor') && <CandInfo id={id} cand_type={'cand'}/> }
      {(flag === 'competitor') && <CandInfo id={id} cand_type={'comp'}/> } */}
      
    </Stack.Item>
  );
};

export default Right;
