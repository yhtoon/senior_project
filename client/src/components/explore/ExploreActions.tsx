import React, { useCallback, useState } from 'react';
import {
  Box,
} from '@shopify/polaris';
import ExploreFilters from './ExploreFilters';
import ExploreTable from './ExploreTable';

interface ExploreActionsProps {
  getCandId: Function,
}

const ExploreActions: React.FC<ExploreActionsProps> = ({
  getCandId,
}) => {
  const [exploreKey, setExploreKey] = useState<string>('');

  return (
    <Box background="surface-hovered-dark" shadow="card">
      <ExploreFilters
        getExploreKey={setExploreKey}
      />
      <ExploreTable
        CID={exploreKey}
        getCandId={getCandId}
      />
    </Box>
  );
}

export default ExploreActions;