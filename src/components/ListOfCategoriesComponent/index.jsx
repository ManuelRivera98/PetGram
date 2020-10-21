/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import Category from '../Category/index';
import Error from '../Error/ErrorCategories';


import { List, Item } from './styles';

const ListOfCategoriesComponent = ({ categories, loading, error }) => {
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const booleanFixed = window.scrollY > 200;
      if (showFixed !== booleanFixed) {
        setShowFixed(booleanFixed);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (boolean, Loading, e) => {
    if (Loading || e) {
      return (
        <List>
          {[1, 2, 3, 4, 5, 6, 7].map((number) => (
            <Item key={number}>
              <Category loading={Loading} />
            </Item>
          ))}
        </List>
      );
    }

    return (

      <List fixed={boolean ? 'fixed' : ''}>
        {categories.map((item) => (
          <Item key={item.id}>
            <Category loading={Loading} {...item} path={`/pet/${item.id}`} />
          </Item>
        ))}
      </List>
    );
  };

  return (
    <>
      {renderList(false, loading, error)}
      {error && <Error message={error} />}
      {showFixed && renderList(true, loading, error)}
    </>
  );
};

ListOfCategoriesComponent.defaultProps = {
  categories: [1, 2, 3, 4, 5, 6, 7],
  loading: false,
  error: null,
};

ListOfCategoriesComponent.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        emoji: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
      }),
    ),
  ),
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default React.memo(ListOfCategoriesComponent);
