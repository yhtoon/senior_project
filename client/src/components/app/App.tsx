import React, { useEffect, useState } from 'react';
import '@shopify/polaris/build/esm/styles.css'
import enTranslations from '@shopify/polaris/locales/en.json';
import {
  AlphaStack,
  AppProvider,
  Stack,
} from '@shopify/polaris';
import CommieTable from '../common/CommieTable';

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
  </AppProvider>;
}

export default App;
