import React, { useEffect, useState } from 'react';
import WTable from '../components/common/Table';

const Right: React.FC = () => {
  return (
    <div style={{ minHeight: '50%', maxHeight: '50%', maxWidth: '100%', backgroundColor: 'green' }}>
      <WTable></WTable>
    </div>
  );
}

export default Right;