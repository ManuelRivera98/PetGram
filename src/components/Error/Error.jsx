import React from 'react';

import PropTypes from 'prop-types';

import { Container, Message, Link } from './stylesError';
import LogoError from './LogoError';

const ErrorApp = ({ message }) => (
  <Container>
    <LogoError />
    <Message>{message}</Message>
    <Link to="/">
      Return Home
    </Link>
  </Container>
);

ErrorApp.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorApp;
