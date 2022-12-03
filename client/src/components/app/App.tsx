import React, { useState } from 'react';
import '@shopify/polaris/build/esm/styles.css'
import enTranslations from '@shopify/polaris/locales/en.json';
import {
  AppProvider,
} from '@shopify/polaris';
import AnalyticsPg from '../common/Analytics'
const App: React.FC = () => {
 
  const [candId, setCandId] = useState<string>('H2AZ09191');

  return <AppProvider i18n={enTranslations}>
    {
      (candId !== '') &&
      <AnalyticsPg CAND_ID={candId} setCandId={setCandId} />
    }
  </AppProvider>;
}

export default App;