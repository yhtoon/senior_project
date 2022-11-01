import React, { useEffect, useState } from 'react';
import { testResponse } from 'types';
import '@shopify/polaris/build/esm/styles.css'
import enTranslations from '@shopify/polaris/locales/en.json';
import {
  AppProvider,
  Stack,
} from '@shopify/polaris';
import Left from '../../pages/left';
import WTable from '../common/Table';

const App: React.FC = () => {

  const [stuff, setStuff] = useState<testResponse>();
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setStuff(data);
      }
    )
  }, []);

  console.log(stuff);

  return <AppProvider i18n={enTranslations}>
    <Stack wrap={false} distribution="fill">
      <Stack.Item>
        {/* <Left></Left> */}
        <WTable></WTable>
      </Stack.Item>
      <Stack.Item>
        <WTable></WTable>
      </Stack.Item>
    </Stack>
  </AppProvider>;
  // (
  //   <div>
  //     {/* {
  //       (stuff) && [stuff.one, stuff.two, stuff.three]
  //     } */}
  // );
}

export default App;
