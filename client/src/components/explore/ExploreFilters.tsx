import React, { useEffect, useState } from 'react';
import {
  Box,
} from '@shopify/polaris';
import Filter from '../common/Filter';

import {
  DistrictKeys,
  OfficeKeys,
  StateKeys,
} from '../../constants/abbreviationKeys'

interface ExploreFiltersProps {
  getExploreKey: Function,
}

const ExploreFilters: React.FC<ExploreFiltersProps> = ({
  getExploreKey,
}) => {
  const [office, setOffice] = useState<string>('P');
  const [state, setState] = useState<string>('-');
  const [district, setDistrict] = useState<string>('-');

  useEffect(() => {
    if (office === 'P') {
      getExploreKey('PUS-');
    }
    else if (state !== '-') {
      getExploreKey(office + state + district);
    }
  }, [office, state, district])

  let DistrictKeysPost = new Map<string, string>();
  DistrictKeysPost.set('-', '-');
  Array.from(Array(DistrictKeys.get(state || '')).keys()).forEach( key => {
    DistrictKeysPost.set(String(key + 1), String(key + 1));
  })

  return (
    <Box background="surface-hovered-dark" borderRadius="2" paddingTop='3' paddingLeft='3' paddingRight='3' shadow="card">
      <Filter
        name={'Candidate Office'}
        content={OfficeKeys}
        getFunction={setOffice}
      />
      <Filter
        name={'State'}
        content={StateKeys}
        getFunction={setState}
        disabled={office === 'P' || office === '-'} // '-' check is to address bug where office is set to '-' when table is first loaded
        track={office}
      />
      <Filter
        name={'District'}
        content={DistrictKeysPost}
        getFunction={setDistrict}
        disabled={office !== 'H' || state === '-'}
        track={state}
      />
    </Box>
  );
}

export default ExploreFilters;