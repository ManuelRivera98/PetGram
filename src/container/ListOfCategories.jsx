/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ListOfCategoriesComponent from '../components/ListOfCategoriesComponent/index';

import useGetData from '../hooks/useGetData';


const ListOfCategories = () => {
  const data = useGetData('https://api-petgram-sigma.vercel.app/categories');
  return (
    <ListOfCategoriesComponent {...data} />
  );
};

export default ListOfCategories;
