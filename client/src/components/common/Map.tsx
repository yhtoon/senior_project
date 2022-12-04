import {
    Stack,
    Text,
    TextContainer, 
    Box
  } from "@shopify/polaris";
  import React, { useState, useCallback, useEffect } from "react";
  import { AppProvider } from "@shopify/polaris";
  import "@shopify/polaris/build/esm/styles.css";
  import AnalyticsTable from "../analytics/AnalyticsTable"
  import {CAND_INFO, AnalyticsIndividualResponse, AnalyticsStateResponse} from 'types';
import ModalInfo from "./Modal";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
// interface MapProps {
//   CAND_ID: string,
  
// }

const Map: React.FC = () => {

    const [CandidateMaster, setCandidateMaster] = useState<CAND_INFO>();

    // useEffect(() => {
    //     fetch(`/getCandidateMaster/${CAND_ID}`).then(
    //       response => response.json()
    //     ).then(
    //       data => { 
    //         setCandidateMaster(data.Item);
    //       }
    //     )
    //   }, [CAND_ID]); 
  return (
    
    <div>
    
       {/* <Stack wrap={false} distribution="fillEvenly"> */}
      
       <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
            {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup> */}
        </Marker>
    </MapContainer>
          {/* </Stack>
        */}
      </div>
   


  );
  }

export default Map ;
