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

interface RightProps {
  id: string
  flag: name
}

const Right: React.FC<RightProps> = ({id, flag}) => {
  return (
    <Stack.Item>
      <Card>
        <TextContainer spacing="loose">
          <p>
            gem
          </p>
          
        </TextContainer>
      </Card>
      {(flag === 'commie') && <CommieInfo COMM_ID={id}/>}
      {(flag === 'competitor') && <CommieInfo COMM_ID={id}/>}
      
    </Stack.Item>
  );
};

export default Right;
