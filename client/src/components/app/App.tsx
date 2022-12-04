import React, { useEffect, useState } from 'react';
import '@shopify/polaris/build/esm/styles.css'
import enTranslations from '@shopify/polaris/locales/en.json';
import {
  AppProvider,
  Box,
  Card,
  List,
  Stack,
  Text,
} from '@shopify/polaris';
import ExploreActions from '../explore/ExploreActions';
import AnalyticsPg from '../common/Analytics'
import Map from "../common/Map0"

const App: React.FC = () => {
  const [candId, setCandId] = useState<string>(''); 
  
  /*
    H2AZ09191
    Arizona
    House 4
    Kelly Cooper
  */

  useEffect(() => {
    console.log(candId)
  }, [candId]);

  // return (
  //   <Map id={''} />
  // )
  return <AppProvider i18n={enTranslations}>
    { 
    
      (candId === '') && // Explore
      <Stack wrap={false} distribution={'fill'}>
        <Stack.Item fill>
        
          <Box padding='3' paddingRight='0'>
            <Card title={<Text variant='heading4xl' as='h1' fontWeight='regular'>EXPLORE</Text>}>
              <Card.Section>
                <List>
                  <List.Item>Investigate funds raised by candidates running for office</List.Item>
                  <List.Item>Explore respective candidate and committee affiliations along with their  information</List.Item>
                  <List.Item>Visualize distribution and concentration of donations using Google Heatmap</List.Item>
                </List>
              </Card.Section>
              <Card.Section title={<Text variant='bodyLg' as='h1' fontWeight='semibold'>INSTRUCTIONS</Text>}>
                <List type='number'>
                  <List.Item>Satisfy filters to search for candidate.</List.Item>
                  <List.Item>Click on candidate name to investigate.</List.Item>
                </List>
              </Card.Section>
            </Card>
          </Box>
        </Stack.Item>
        <Stack.Item>
        <AnalyticsPg CAND_ID={candId} setCandId={setCandId} />
          <ExploreActions
            getCandId={setCandId}
          />
        </Stack.Item>
      </Stack>
    }
    {
      (candId !== '') &&
      <AnalyticsPg CAND_ID={candId} setCandId={setCandId} />
    }
  </AppProvider>;
}

export default App;