
import React, { useEffect } from 'react';
import L from 'leaflet'
import "leaflet.heat"
import 'leaflet/dist/leaflet.css'

interface MapProps {
  CAND_ID: string,
  heattype: string,
}

const Map: React.FC<MapProps> = ({
  CAND_ID,
  heattype
}) => {
  const rand: never[] = [];
  var map: L.Map;
  useEffect(() => {
    fetch(heattype === 'i' ? `/getAnalyticsIndividual/${CAND_ID}` : `/getAnalyticsCommie/${CAND_ID}`).then(
      response => response.json()
    ).then(
      data => {
        map = L.map("map").setView([38.1, -90.7], 4);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        const points = (data.Item.heatmap ? data.Item.heatmap : "")
          ? (data.Item.heatmap ? data.Item.heatmap : rand).map((p: number[]) => {
            return [p[0], -p[1], (p[2] as number + 0.1) * 2000];
          })
          : [];
        (L as any).heatLayer(points).addTo(map);
      }
    );
  }, [CAND_ID, heattype]);

  return (<div id="map" style={{ height: "60vh" }}/>);
}

export default Map;

