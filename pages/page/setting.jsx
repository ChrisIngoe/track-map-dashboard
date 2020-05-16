import React from 'react';

import MainLayout from '../../layout/MainLayout';
import SettingContainer from '../../components/container/page/SettingContainer';
import HeadDefault from '../../layout/head/HeadDefault';

const Setting = () => {
  return (
    <>
      <HeadDefault
        title="Setting | Next.JS with Reactstrap (React dashboard web application)"
        description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
      />
      <MainLayout activeLink="page.setting">
        <SettingContainer />
      </MainLayout>
    </>
  );
};

export default Setting;
