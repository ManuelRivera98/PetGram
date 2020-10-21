/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import PropTypes from 'prop-types';

import PhotoCardComponent from '../PhotoCardComponent';
import Error from '../Error/Error';

const ListOfPhotoCardsComponent = ({ data: { photos = [1, 2, 3, 4] }, loading, error }) => {
  if (error) return <Error message={error.message} />;

  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCardComponent key={photo.id} {...photo} loading={loading} />
      ))}
    </ul>

  );
};

ListOfPhotoCardsComponent.defaultProps = {
  data: {},
  loading: false,
  error: null,
};

ListOfPhotoCardsComponent.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          categoryId: PropTypes.number.isRequired,
          src: PropTypes.string.isRequired,
          likes: PropTypes.number.isRequired,
          userId: PropTypes.string,
          liked: PropTypes.bool.isRequired,
        }),
      ),
    ),
  ),
  loading: PropTypes.bool,
  error: PropTypes.string,
};


export default ListOfPhotoCardsComponent;
