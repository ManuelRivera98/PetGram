import React from 'react';

import { TiArrowBackOutline } from 'react-icons/ti';
import PropTypes from 'prop-types';

import {
  Grid, Image, Link, Icon,
} from './styles';

const ListFavoritesComponent = ({ favs, loading }) => {
  if (!favs.length) {
    return (
      <>
        <h1>No tienes favoritos</h1>
        <Icon to="/"><TiArrowBackOutline size="30px" /></Icon>
      </>
    );
  }

  return (


    <>
      <Grid>
        {
          favs.map((fav) => (
            <Link to={`/detail/${fav.id}`} key={fav.id} loading={loading.toString()}>
              <Image src={fav.src} alt="" loading={loading.toString()} />
            </Link>
          ))
      }
      </Grid>

    </>
  );
};

ListFavoritesComponent.defaultProps = {
  favs: [1, 3, 3, 4, 5],
  loading: false,
};

ListFavoritesComponent.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }),
  ),
  loading: PropTypes.bool,
};

export default ListFavoritesComponent;
