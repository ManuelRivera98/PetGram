/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import PropTypes from 'prop-types';
import ListOfPhotoCardComponent from '../components/ListOfPhotoCardsComponent/index';

import useGetPhotos from '../hooks/useGetPhotos';

const ListOfPhotoCard = ({ id }) => {
  const response = useGetPhotos(id);

  return (
    <ListOfPhotoCardComponent {...response} />
  );
};

ListOfPhotoCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  id: PropTypes.string,
};

export default ListOfPhotoCard;
