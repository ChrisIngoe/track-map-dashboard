import React from 'react';
import MainLayout from '../layout/MainLayout';
import HeadDefault from '../layout/head/HeadDefault';

const About = () => {
  return (
    <>
      <HeadDefault
        title="Track Map Dashboard"
        description="NextJS with Reactstrap components with SCSS library, a NextJS example application."
      />
      <MainLayout>
        <p>About Page</p>
      </MainLayout>
    </>
  );
};

export default About;
