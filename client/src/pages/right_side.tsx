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

interface LeftProps {
  flag: string
}

const Right: React.FC = ({flag}) => {
  return (
    <Stack.Item>
      <Card>
        <TextContainer spacing="loose">
          <p>
            rand
          </p>
          <p>
            text hr
          </p>
        </TextContainer>
      </Card>
      
      {flag} = "candidate" ? <CandInfo/> : <CommieInfo/>
      
    </Stack.Item>
  );
};

export default Right;
