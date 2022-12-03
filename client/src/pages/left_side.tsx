import {
  Stack,
  Card,
} from "@shopify/polaris";
import Title from "../components/common/Title";
import CompetitorTable from "../components/competitor/CompetitorTable";
import CommieTable from "../components/commie/CommieTable";

type name = "commie" | "competitor";

interface LeftProps {
  id: string
  flag: name
  getCompetitorID: Function
  COMP_ID?:string
}

const ModalLeft: React.FC<LeftProps> = ({
  id,
  flag,
  getCompetitorID,
  COMP_ID=''
}) => {
  return (
    <Stack.Item>
        {(flag === 'commie') && <Title id={id} flag={flag} />}
        {(flag === 'competitor') && <Title id={id} flag={flag}/>}
      <Card>
        {(flag === 'commie') && <CommieTable COMM_ID={id} />}
        {(flag === 'competitor') && <CompetitorTable COMP_ID={COMP_ID} CAND_ID={id} getCompetitorID={getCompetitorID} />}
      </Card>
    </Stack.Item>
  );
};

export default ModalLeft;
