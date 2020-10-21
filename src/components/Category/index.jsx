import React from 'react';

import PropTypes from 'prop-types';

import { Link, Image, Div } from './styles';

const Category = ({
  loading, cover, emoji, path,
}) => (
  <Link to={path}>
    <Image src={cover} alt="" loading={loading.toString()} />
    {loading ? <Div loading={loading.toString()} /> : emoji}
  </Link>

);

Category.defaultProps = {
  loading: false,
  cover: '',
  emoji: '',
  path: '',
};

Category.propTypes = {
  loading: PropTypes.bool,
  cover: PropTypes.string,
  emoji: PropTypes.string,
  path: PropTypes.string,
};

export default Category;
