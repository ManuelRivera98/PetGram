import React from 'react';

import { MdFavoriteBorder, MdHome, MdPersonOutline } from 'react-icons/md';
import { Nav, Link } from './styles';

// Reach/router nos genera una propiedad aria-current al elemento  Link que esta en pantalla.
const NavBar = () => (
  <Nav>
    <Link to="/"><MdHome size="32px" /></Link>
    <Link to="/favorites"><MdFavoriteBorder size="32px" /></Link>
    <Link to="/user"><MdPersonOutline size="32px" /></Link>
  </Nav>
);

export default NavBar;
