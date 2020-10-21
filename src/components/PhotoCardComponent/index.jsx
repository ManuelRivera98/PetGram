/* eslint-disable react/require-default-props */
import React from 'react';

import PropTypes from 'prop-types';

import { Link } from '@reach/router';

import FavButton from '../FavButton/index';

import useNearScreen from '../../hooks/useNearScreen';
import useToggleLikeMutation from '../../hooks/useToggleLikeMutation';
import {
  Article, ImgWrapper, Img, Div,
} from './styles';

const PhotoCardComponent = ({
  id, liked, likes = 0, src, loading,
}) => {
  const { show, element } = useNearScreen();
  const { toggleLikePhoto } = useToggleLikeMutation(id);

  const handleFavClick = () => {
    toggleLikePhoto();
  };

  if (loading) {
    return (

      <>
        <Article ref={element}>
          <ImgWrapper>
            <Img loading={loading.toString()} />
          </ImgWrapper>
          <Div loading={loading.toString()} />
        </Article>
      </>
    );
  }

  return (
  // Guardamos referencia del elemento del DOM (Article) en la variable element creada con useRef()
    <Article ref={element}>
      {show && (
      <>
        <Link to={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={src} alt="" loading={loading.toString()} />
          </ImgWrapper>
        </Link>

        <FavButton likes={likes} liked={liked} onClick={handleFavClick} />
      </>
      )}
    </Article>
  );
};

PhotoCardComponent.propTypes = {
  id: PropTypes.string,
  liked: PropTypes.bool,
  likes: PropTypes.number,
  src: PropTypes.string,
  loading: PropTypes.bool,
};

export default PhotoCardComponent;
