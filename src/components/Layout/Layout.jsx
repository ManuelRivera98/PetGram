import React from 'react';

import PropTypes from 'prop-types';

import Logo from '../Logo/index';
import GlobalStyles from '../../styles/GlobalStyles';
import NavBar from '../NavBar/NavBar';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Logo />
    {children}
    <NavBar />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
