import React from 'react';

import Button from './styles';

import { useStateValue } from '../../Context';



import Helmet from '../../components/Helmet/index';

const User = () => {
  const [, dispatch] = useStateValue();

  const handleClickLogin = () => {
    dispatch({
      type: 'UpdateUserLogin',
      payload: false,
    });

    window.localStorage.removeItem('tokenCode');
  };

  return (
    <>
      <Helmet title="Perfil" />
      <h1>User name</h1>
      <Button type="button" onClick={handleClickLogin}>Cerrar sesión</Button>
    </>
  );
};

export default User;
