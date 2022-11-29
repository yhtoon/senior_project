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
}

const Right: React.FC<RightProps> = ({id, flag, cand_type}) => {
  return (
    <Stack.Item>
      <Card>
        <TextContainer spacing="loose">
          
          
        </TextContainer>
      </Card>
      {(flag === 'commie') && <CommieInfo COMM_ID={id}/>}
      {(flag === 'competitor') && <CandInfo id={id} cand_type={'cand'}/> }
      {(flag === 'competitor') && <CandInfo id={id} cand_type={'comp'}/> }
      
    </Stack.Item>
  );
};

export default Right;
