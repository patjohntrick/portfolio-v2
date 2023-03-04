import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Floating from './Floating';

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Floating />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
