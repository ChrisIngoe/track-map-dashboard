import React from 'react';
import MainLayout from '../layout/MainLayout';
import HomePage from '../components/container/HomePage';
import HeadDefault from '../layout/head/HeadDefault';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isScrolled: false };
  }

  render() {
    const { storeLayout } = this.props;

    return (
      <>
        <HeadDefault
          title="Track Map Dashboard"
          description="NextJS with Reactstrap components with SCSS library, a NextJS example application."
        />
        <MainLayout storeLayout={storeLayout}>
          <HomePage storeLayout={storeLayout} />
        </MainLayout>
      </>
    );
  }
}

export default Index;
