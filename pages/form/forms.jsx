import React from 'react';

import MainLayout from '../../layout/MainLayout';
import FormsContainer from '../../components/container/form/FormsContainer';
import HeadDefault from '../../layout/head/HeadDefault';

const Forms = () => {
  return (
    <>
      <HeadDefault
        title="Forms | Next.JS with Reactstrap (React dashboard web application)"
        description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
      />
      <MainLayout activeLink="forms">
        <FormsContainer />
      </MainLayout>
    </>
  );
};

export default Forms;
