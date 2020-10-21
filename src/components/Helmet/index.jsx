import React from 'react';

import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

const LayoutHelmet = ({ title, description }) => (
  <Helmet>
    <title>
      {title}
      {' '}
      | InstaPlatzi 🐼
    </title>
    <meta name="description" content={description} />
  </Helmet>

);

LayoutHelmet.defaultProps = {
  title: '',
  description: '',
};

LayoutHelmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default LayoutHelmet;
