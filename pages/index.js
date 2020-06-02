import React from 'react';
import MainLayout from '../layout/MainLayout';
import HomePage from '../components/container/HomePage';
import HeadDefault from '../layout/head/HeadDefault';

const Index = () => {
  return (
    <>
      <HeadDefault
        title="Dashboard"
        description="NextJS with Reactstrap components with SCSS library, a NextJS example application."
      />
      <MainLayout>
        <HomePage />
      </MainLayout>
    </>
  );
};

export default Index;
