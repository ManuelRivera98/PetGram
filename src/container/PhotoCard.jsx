/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import PropTypes from 'prop-types';

import PhotoCardComponent from '../components/PhotoCardComponent/index';

import useGetSinglePhoto from '../hooks/useGetSinglePhoto';

const PhotoCard = ({ detailId }) => {
  const { data: { photo = [] } = {}, loading } = useGetSinglePhoto(detailId);
  return (
    <PhotoCardComponent {...photo} loading={loading} />
  );
};

PhotoCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  detailId: PropTypes.string,
};

export default PhotoCard;
