import React, { Component, createRef } from 'react';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  MapControl,
  withLeaflet,
} from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import useSwr from 'swr';

const fetcher = (...args) => fetch(...args).then(response => response.json());

function MapPage() {
  const url =
    'https://data.police.uk/api/crimes-street/all-crime?lat=51.39&lng=-1.33&date=2020-03';
  const { data, error } = useSwr(url, { fetcher });
  const crimes = data && !error ? data.slice(0, 100) : [];
  const draggable = false;
  const position = [51.39, -1.33];

  const toggleDraggable = () => {};

  const updateMarker = e => {};

  const updatePosition = () => {};

  return (
    <div className="map-root">
      <Map
        center={position}
        zoom={15}
        style={{
          height: '700px',
        }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {crimes.map(crime => (
          <Marker
            draggable={false}
            onDragend={updatePosition}
            key={crime.id}
            position={[crime.location.latitude, crime.location.longitude]}
            animate={true}
          >
            <Popup minWidth={90}>
              <span onClick={toggleDraggable}>{crime.category}</span>
            </Popup>
          </Marker>
        ))}
      </Map>
    </div>
  );
}

export default MapPage;
