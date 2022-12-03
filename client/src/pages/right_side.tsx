import {
  Stack,
  Card,
  TextContainer
} from "@shopify/polaris";
import CandInfo from "../components/common/CandInfo";
import CommieInfo from "../components/common/CommieInfo";

interface RightProps {
  id: string
  competitor?: boolean
  COMP_ID?: string
}

const ModalRight: React.FC<RightProps> = ({
  id,
  competitor,
  COMP_ID
}) => {
  return (
    <Stack.Item>
      <Card>
        <TextContainer spacing="loose">
          
        </TextContainer>
      </Card>
      {competitor && COMP_ID && <CandInfo CAND_ID_A={id} CAND_ID_B={COMP_ID}/>}
      {!competitor && !COMP_ID && <CommieInfo COMM_ID={id}/>}
    </Stack.Item>
  );
};

export default ModalRight;
