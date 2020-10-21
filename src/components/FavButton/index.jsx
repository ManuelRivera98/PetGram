import React from 'react';

import PropTypes from 'prop-types';

import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import { Container, Button } from './styles';

const FavButton = ({ liked, likes, onClick }) => (
  <Container>
    <Button onClick={onClick} type="button">
      {liked ? <MdFavorite size="32px" /> : <MdFavoriteBorder size="32px" />}
    </Button>
    {likes}
    {' '}
    likes!
  </Container>

);

FavButton.defaultProps = {
  liked: false,
  likes: 0,
  onClick(e) { return e; },
};

FavButton.propTypes = {
  liked: PropTypes.bool,
  likes: PropTypes.number,
  onClick: PropTypes.func,
};

export default FavButton;
