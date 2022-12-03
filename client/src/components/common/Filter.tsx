import React, { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Select,
} from '@shopify/polaris';

interface FilterProps {
  name: string,
  content: Map<string, string>,
  getFunction: Function,
  disabled?: boolean,
  track?: string,
}

const Filter: React.FC<FilterProps> = ({
  name,
  content,
  getFunction,
  disabled = false,
  track = '',
}) => {
  const [selected, setSelected] = useState<string>(name === 'Candidate Office' ? 'P' : '');

  useEffect(() => {
    getFunction(selected);
  }, [selected]);

  useEffect(() => {
    setSelected('-');
  }, [disabled, track]);
  
  const handleSelectChange = useCallback((value: string) => setSelected(value), []);

  const selectOptions = Array.from(content.keys()).map( key => {
    return {label: key, value: content.get(key) || '-'} 
  })

  return (
    <Select
      label={name + ':'}
      labelInline
      options={selectOptions}
      onChange={handleSelectChange}
      value={selected}
      disabled={disabled}
    />
  );
}

export default Filter;