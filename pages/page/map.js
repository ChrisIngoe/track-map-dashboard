import React from 'react';
import MainLayout from '../../layout/MainLayout';
import HeadDefault from '../../layout/head/HeadDefault';
import dynamic from 'next/dynamic';
import { useUser } from '../../lib/hooks';

const MapPageWithNoSSR = dynamic(
  () => import('../../components/container/page/MapPage'),
  {
    ssr: false,
  },
);

const Map = () => {
  const user = useUser({ redirectTo: '/page/login' });
  return (
    <>
      <HeadDefault
        title="Map | Track Map"
        description="Map view of Track Map location points"
      />
      <MainLayout>{user && <MapPageWithNoSSR />}</MainLayout>
    </>
  );
};

export default Map;
