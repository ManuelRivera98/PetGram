/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ListOfCategoriesComponent from '../components/ListOfCategoriesComponent/index';

import useGetData from '../hooks/useGetData';


const ListOfCategories = () => {
  const data = useGetData('https://petgramsd.now.sh/categories');
  return (
    <ListOfCategoriesComponent {...data} />
  );
};

export default ListOfCategories;
