/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect } from "react";

import L from "leaflet";

import "leaflet/dist/leaflet.css";
import marker2x from "leaflet/dist/images/marker-icon-2x.png";
import marker from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import { MapWrapper } from "./style";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x,
  iconUrl: marker,
  shadowUrl: markerShadow,
});

interface MapProps {
  onClick(data: any): void;
  popupText: string;
  coord: any;
}

const Map: React.FC<MapProps> = ({ onClick, popupText, coord }) => {
  let map: any = null;
  let marker: any = null;
  const tileLayerUrl = "https://{s}.tile.osm.org/{z}/{x}/{y}.png";

  useEffect(() => {
    if (marker && popupText !== "") marker.bindPopup(popupText).openPopup();
  }, [marker, popupText]);

  const setMarker = useCallback((latlng: any, callback?: Function) => {
    map.setView(latlng, 13);
    marker = L.marker(latlng).addTo(map);

    if (typeof callback === "function") callback();
  }, []);

  const whenMarkerSet = useCallback(
    ({ lat, lng: lon }) => {
      onClick({ lat, lon });
    },
    [onClick]
  );

  const creteMap = useCallback(() => {
    map = L.map("map");
    L.tileLayer(tileLayerUrl, {
      attribution:
        '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);
    setMarker({
      lat: coord.lat,
      lng: coord.lon,
    });

    map.on("click", ({ latlng }: any) => {
      if (typeof marker !== "undefined") map.removeLayer(marker);

      setMarker(latlng, () => {
        whenMarkerSet(latlng);
      });
    });
  }, []);

  useEffect(() => {
    creteMap();
  }, [creteMap]);

  return <MapWrapper id="map" />;
};

export default Map;
