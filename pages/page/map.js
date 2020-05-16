import React from 'react';
import MainLayout from '../../layout/MainLayout';
import HeadDefault from '../../layout/head/HeadDefault';
import dynamic from 'next/dynamic';

const MapPageWithNoSSR = dynamic(
  () => import('../../components/container/page/MapPage'),
  {
    ssr: false,
  },
);

const Map = () => {
  return (
    <>
      <HeadDefault
        title="Map | Track Map"
        description="Map view of Track Map location points"
      />
      <MainLayout>
        <MapPageWithNoSSR />
      </MainLayout>
    </>
  );
};

export default Map;
