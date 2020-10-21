import React from 'react';

import PropTypes from 'prop-types';

import ListOfCategories from '../container/ListOfCategories';
import ListOfPhotoCard from '../container/ListOfPhotoCards';
import Helmet from '../components/Helmet/index';

const Home = ({ CategoryId }) => (
  <>
    <Helmet title="Noticias" description="El lugar favorito para encontrar fotos de tus mascotas preferidas" />
    <ListOfCategories />
    <ListOfPhotoCard id={CategoryId} />
  </>
);

Home.propTypes = {
  // eslint-disable-next-line react/require-default-props
  CategoryId: PropTypes.string,
};

export default React.memo(Home, (prevProps, props) => prevProps.CategoryId === props.CategoryId);
