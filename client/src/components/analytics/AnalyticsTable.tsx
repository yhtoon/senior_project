import React, { useCallback, useState, useEffect } from 'react';
import {
  Box,
  Select,
} from '@shopify/polaris';

import AnalyticsCommieTable from './AnalyticsCommieTable';
import AnalyticsIndividualTable from './AnalyticsIndividualTable';
import AnalyticsStateTable from './AnalyticsStateTable';

interface AnalyticsTableProps {
  CAND_ID: string,
  getTableType: Function, 
}

const AnalyticsTable: React.FC<AnalyticsTableProps> = ({
  CAND_ID,
  getTableType,
}) => {
  const [selected, setSelected] = useState<string>('i');

  useEffect(() => {
    getTableType(selected)
  }, [selected]);

  const handleSelectChange = useCallback((value: string) => setSelected(value), []);

  const selectOptions = [
    {label: 'Individual', value: 'i'},
    {label: 'Committee', value: 'c'},
    {label: 'State', value: 's'},
  ];

  
  return (
    <Box background="surface-hovered-dark" borderRadius="2" padding="3" shadow="card">
      <Select
        label="View donors by"
        labelInline
        options={selectOptions}
        onChange={handleSelectChange}
        value={selected}
      />
      {
        (selected === 'i') && 
          <AnalyticsIndividualTable
          CAND_ID={CAND_ID} />
          
      }
      {
        (selected === 'c') && 
          <AnalyticsCommieTable
            CAND_ID={CAND_ID}
          />
      }
      {
        (selected === 's') && 
          <AnalyticsStateTable
            CAND_ID={CAND_ID}
          />
      }
    </Box>
    
  );
}

export default AnalyticsTable;