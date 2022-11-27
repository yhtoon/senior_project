import React, { useEffect, useState } from 'react';
import '@shopify/polaris/build/esm/styles.css'
import enTranslations from '@shopify/polaris/locales/en.json';
import {
  AppProvider,
} from '@shopify/polaris';
import CommieTable from '../commie/CommieTable';
import CompetitorTable from '../competitor/CompetitorTable';

const App: React.FC = () => {

  // const [stuff, setStuff] = useState<testResponse>();
  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setStuff(data);
  //     }
  //   )
  // }, []);

  // console.log(stuff);

  return <AppProvider i18n={enTranslations}>
    <CommieTable
      COMM_ID='C00545236'
    />
    <CompetitorTable
      COMP_ID='2022HCA17'
    />
  </AppProvider>;
}

export default App;
