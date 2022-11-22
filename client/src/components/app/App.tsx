import React, { useEffect, useState } from 'react';
import { testResponse } from 'types';
import '@shopify/polaris/build/esm/styles.css'
import enTranslations from '@shopify/polaris/locales/en.json';
import {
  AlphaStack,
  AppProvider,
  Stack,
} from '@shopify/polaris';
import Left from '../../pages/left_side';
import Right from '../../pages/right_side';

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
    <Stack wrap={false} distribution='fill'>
      <Stack.Item fill>
        <AlphaStack>
          <Left></Left>
        </AlphaStack>
      </Stack.Item>
      <Stack.Item>
        <AlphaStack>
          <Right></Right>
        </AlphaStack>
      </Stack.Item>
    </Stack>
  </AppProvider>;
}

export default App;
