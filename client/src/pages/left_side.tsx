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
  getCompetitorID: Function
  COMP_ID?:string
}

const Left: React.FC<LeftProps> = ({id, flag}) => {
  const [Competitor, setCompetitor] = useState<string>('');

  return (
    <Stack.Item>
      {(flag === 'commie') && <Title id={id} flag={flag} />}
      {(flag === 'competitor') && <Title id={id} flag={flag}/>}
      <Card>
      {(flag === 'commie') && <CommieTable COMM_ID={id} />}
      {(flag === 'competitor') && <CompetitorTable COMP_ID={id} CAND_ID={id} getCompetitorID={setCompetitor} />}
      </Card>
    </Stack.Item>
  );
};

export default Left;
