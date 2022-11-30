import React, { useEffect, useState } from 'react';
import '@shopify/polaris/build/esm/styles.css'
import enTranslations from '@shopify/polaris/locales/en.json';
import {
  AppProvider,
} from '@shopify/polaris';
import CommieTable from '../commie/CommieTable';
import CompetitorTable from '../competitor/CompetitorTable';
import ModalInfo from '../common/Modal'
import AnalyticsPg from '../common/Analytics'
const App: React.FC = () => {

  const [candidate, setCandidate] = useState<string>('');
  const [committee, setCommittee] = useState<string>('');


  return <AppProvider i18n={enTranslations}>
    
    {/* <ModalInfo id="C00545236" flag="commie"/> */}
    <AnalyticsPg CAND_ID="C00545236" />
  </AppProvider>;
}

export default App;