import React from 'react';

import PropTypes from 'prop-types';

import PhotoCard from '../container/PhotoCard';
import Helmet from '../components/Helmet/index';

const Details = ({ detailId }) => (
  <>
    <Helmet title={`Foto ${detailId}`} />
    <PhotoCard detailId={detailId} />
  </>
);

Details.propTypes = {
  // eslint-disable-next-line react/require-default-props
  detailId: PropTypes.string,
};

export default Details;
