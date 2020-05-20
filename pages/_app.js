import App from 'next/app';
import React from 'react';
import MenuContext from '../components/hooks/menuContext';
import '../assets/scss/main.scss';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, user: null, menuOpen: true };
  }

  componentDidMount = () => {
    const menuOpen = localStorage.getItem('nextjs-app-starter-menu');
    if (menuOpen === true) {
      this.setState({
        menuOpen,
      });
    }
  };

  toggleMenu = () => {
    localStorage.setItem('nextjs-app-starter-menu', !this.state.menuOpen);
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  };

  static async getInitialProps({ Component, ctx }) {
    const {
      query: { amp },
    } = ctx;
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <MenuContext.Provider
        value={{
          menuOpen: this.state.menuOpen,
          toggleMenu: this.toggleMenu,
        }}
      >
        <Component {...pageProps} />
      </MenuContext.Provider>
    );
  }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async appContext => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };

export default MyApp;
