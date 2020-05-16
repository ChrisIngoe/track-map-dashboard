import React from 'react';

import MainLayout from '../../layout/MainLayout';
import EmployeeContainer from '../../components/container/card/EmployeeContainer';
import HeadDefault from '../../layout/head/HeadDefault';

const Employees = ({ dispatch, storeLayout, id }) => {
  const user = null;
  return (
    <>
      <HeadDefault
        title="Employees | Next.JS with Reactstrap (React dashboard web application)"
        description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
      />
      <MainLayout
        activeLink="employees"
        dispatch={dispatch}
        storeLayout={storeLayout}
      >
        <EmployeeContainer
          dispatch={dispatch}
          storeLayout={storeLayout}
          id={id}
        />
      </MainLayout>
    </>
  );
};

export default Employees;
