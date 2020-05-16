import React from 'react';
import MainLayout from '../layout/MainLayout';
import HeadDefault from '../layout/head/HeadDefault';

const Store = () => {
  return (
    <>
      <HeadDefault
        title="Track Map Dashboard"
        description="NextJS with Reactstrap components with SCSS library, a NextJS example application."
      />
      <MainLayout>
        <p>Store Page</p>
      </MainLayout>
    </>
  );
};

export default Store;
