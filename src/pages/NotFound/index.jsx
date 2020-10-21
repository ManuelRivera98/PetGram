import React from 'react';

import { Container, Message, Link } from './styles';

import Helmet from '../../components/Helmet/index';
import LogoError from '../../components/Error/LogoError';

function NotFound() {
  return (
    <Container className="body">
      <Helmet title="404" description="No hemos encontrado resultados" />
      <LogoError />
      <Message> We have not found results</Message>
      <Link to="/">
        Home
      </Link>
    </Container>
  );
}

export default NotFound;
