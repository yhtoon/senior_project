import {
  Button,
  Modal,
  Stack,
} from '@shopify/polaris';
import React, { useState, useCallback } from 'react';
import ModalLeft from '../../pages/left_side';
import ModalRight from '../../pages/right_side';

type name = 'commie' | 'competitor';

interface ModalProps {
  id: string
  flag: name
  COMP_ID? : string
  name?: string
}

const ModalInfo: React.FC<ModalProps> = ({ 
  id,
  flag,
  COMP_ID,
  name = '',
}) => {
  const [active, setActive] = useState(true);
  const [Competitor, setCompetitor] = useState<string>('');
  
  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const activator = <Button plain={name !== ''} fullWidth={name === ''} onClick={toggleActive}>{(name === '') ? 'View Competitor Analysis' : name}</Button>;

  return (
    <div style={{ height: (name === '') ? '500px' : '' }}>
      <Modal
        large
        activator={activator}
        open={!active}
        onClose={toggleActive}
        title={(flag === 'commie' ? 'Committee Info' : 'Competitor Analysis')}
      >
        <Modal.Section>
          <Stack wrap={false} distribution='fill'>
            <ModalLeft id={id} flag={flag} getCompetitorID={setCompetitor} COMP_ID={COMP_ID}/>
            <ModalRight id={id} competitor COMP_ID={Competitor} />
          </Stack>
        </Modal.Section>
      </Modal>
    </div>
  );
};

export default ModalInfo;
