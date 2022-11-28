import React, { useEffect, useState } from 'react';
import '@shopify/polaris/build/esm/styles.css'
import enTranslations from '@shopify/polaris/locales/en.json';
import {
  AppProvider,
} from '@shopify/polaris';
import CommieTable from '../commie/CommieTable';
import CompetitorTable from '../competitor/CompetitorTable';
import ModalInfo from '../common/Modal'
const App: React.FC = () => {


  return <AppProvider i18n={enTranslations}>
    
   <ModalInfo id="C00545236" flag="commie"/>
  </AppProvider>;
}

export default App;