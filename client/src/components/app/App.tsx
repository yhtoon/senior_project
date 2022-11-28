import React, { useEffect, useState } from 'react';
import '@shopify/polaris/build/esm/styles.css'
import enTranslations from '@shopify/polaris/locales/en.json';
import {
  AppProvider,
} from '@shopify/polaris';
import CommieTable from '../commie/CommieTable';
import CompetitorTable from '../competitor/CompetitorTable';
import AnalyticsTable from '../analytics/AnalyticsTable';

const App: React.FC = () => {
  const [competitor, setCompetitor] = useState<string>('');
  
  useEffect(() => {
    console.log(competitor)
  }, [competitor])

  return <AppProvider i18n={enTranslations}>
    <AnalyticsTable
      CAND_ID='H2AZ09191'
    />
    {/* <div>
      {competitor}
    </div>
    <CompetitorTable
      COMP_ID='2022HOH10'
      CAND_ID='H2OH10252'
      getCompetitorID={setCompetitor}
    /> */}
    {/* <CommieTable 
      COMM_ID='C00545236'
    /> */}
  </AppProvider>;
}

export default App;
