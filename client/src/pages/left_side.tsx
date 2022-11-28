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
import Title from "../components/common/Title";
import CompetitorTable from "../components/competitor/CompetitorTable";
import React, { useState, useCallback, useEffect } from "react";
import CommieTable from "../components/commie/CommieTable";


type name = "commie" | "competitor";

interface LeftProps {
  id: string
  flag: name
}

const Left: React.FC<LeftProps> = ({id}) => {

  return (
    <Stack.Item>
      <Title />
      <Card>
        <CommieTable COMM_ID={id}  />
      </Card>
    </Stack.Item>
  );
};

export default Left;
