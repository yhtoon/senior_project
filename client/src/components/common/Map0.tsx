
import React, { useState, useCallback,useEffect } from 'react';

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { render } from 'react-dom';
import { addressPoints } from './test.js';
import L from 'leaflet'
import "leaflet.heat"


import {CAND_INFO, heatmap} from 'types';
import {AnalyticsIndividualResponse} from 'types';
import{AnalyticsCommieResponse} from 'types';
import { getPointResolution } from 'ol/proj.js';
import { String } from 'aws-sdk/clients/omics.js';

  interface MapProps {
    CAND_ID: string,
    heattype: string,
  }

//const id = props.id;

const Map: React.FC<MapProps> = ({CAND_ID, heattype}) => {

  const rand: never[] = [];
  const [CandidateMaster, setCandidateMaster] = useState<CAND_INFO>();
  const [CoordinatesI, setCoordinatesI] = useState<heatmap>();
  const [CoordinatesC, setCoordinatesC] = useState<AnalyticsCommieResponse>();


  useEffect(() => {
    fetch(`/getAnalyticsIndividualTable/${CAND_ID}`).then(
      response => response.json()
    ).then(
      data => { 
        setCoordinatesI(data.Item.heatmap);
      }
    )
  }, [CAND_ID]); 


    useEffect(() => {
      
      var map = L.map("map").setView([-37.87, 175.475], 12);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const points = (CoordinatesI ? CoordinatesI : "")
        ? (CoordinatesI ? CoordinatesI : rand).map((p) => {
            return p;
          })
        : [];
        
      (L as any).heatLayer(points).addTo(map);
    }, [heattype]);


    return (
      <div>
        <div id="map" style={{ height: "100vh" }}></div>
        <div> </div>
        </div>
    );

  }

  export default Map;

