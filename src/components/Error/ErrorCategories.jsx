import React from 'react';

import PropTypes from 'prop-types';

import Container from './stylesErrorCategories';

const ErrorCategories = ({ message }) => (
  <Container className="Error">
    <h1>{message}</h1>
  </Container>
);

ErrorCategories.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorCategories;
