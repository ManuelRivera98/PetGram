import React from 'react';
import ListFavorites from '../container/ListFavorites';

import Helmet from '../components/Helmet/index';

const Favorites = () => (
  <>
    <Helmet title="Tus favoritos" description="Las mascotas que te encantan" />
    <h1>Favorites</h1>
    <ListFavorites />
  </>
);

export default Favorites;
