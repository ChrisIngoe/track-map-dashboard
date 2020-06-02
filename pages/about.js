import React from 'react';
import MainLayout from '../layout/MainLayout';
import HeadDefault from '../layout/head/HeadDefault';
import AboutPage from '../components/container/page/AboutPage';

const About = () => {
  return (
    <>
      <HeadDefault
        title="About"
        description="NextJS with Reactstrap components with SCSS library, a NextJS example application."
      />
      <MainLayout>
        <AboutPage />
      </MainLayout>
    </>
  );
};

export default About;
