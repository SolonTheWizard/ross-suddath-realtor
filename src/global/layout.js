import React from 'react';
import './styles.css';

const Layout = (props) => {
  return (
    <>
      {/* Site-wide top nav HOME, SELL, ABOUT, REVIEWS, CONTACT*/}
      <main>{props.children}</main>
      {/* Site-wide footer */}
    </>
  );
};

export default Layout;
