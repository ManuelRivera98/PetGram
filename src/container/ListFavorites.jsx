/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ListFavoritesComponent from '../components/ListFavoritesComponent';
import useGetFavorites from '../hooks/useGetFavorites';

import Error from '../components/Error/Error';

const ListFavorites = () => {
  const { data, loading, error } = useGetFavorites();

  if (error) return <Error message={error.message} />;

  return (
    <ListFavoritesComponent {...data} loading={loading} />
  );
};

export default ListFavorites;
