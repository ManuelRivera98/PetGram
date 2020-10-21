/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { TiArrowBackOutline } from 'react-icons/ti';
import { P, Button, Icon } from './styles';

import UserForm from '../../components/UserForm/index';
import { useStateValue } from '../../Context';
import useRegisterMutation from '../../hooks/useRegisterMutation';
import useLoginMutation from '../../hooks/useLoginMutation';

const useMutationValue = (action, loading, error, type, errorMsg) => ({
  action, loading, error, type, errorMsg,
});

const UnregisteredUser = () => {
  const [{ sectionLogin, email, password }, dispatch] = useStateValue();
  const {
    register, loading, error,
  } = useRegisterMutation(email, password);

  const {
    Login, loadingLogin, errorLogin,
  } = useLoginMutation(email, password);

  const REGISTER = useMutationValue(register, loading, error, 'sectionLogin', 'El usuario ya existe o ha ocurrido algún otro problema');
  const LOGIN = useMutationValue(Login, loadingLogin, errorLogin, undefined, 'La contraseña no es correcta o el usuario no existe');

  const handleOnCLickValue = (boolean) => {
    dispatch({
      type: 'sectionLogin',
      payload: boolean,
    });
  };

  return (
    <>
      {sectionLogin
        ? (
          <>
            <UserForm title="Iniciar sesión" {...LOGIN} />
            <P>
              ¿ No tienes una cuenta ?
              <Button type="submit" onClick={() => handleOnCLickValue(false)}>REGISTRARSE</Button>
            </P>
          </>
        )
        : (
          <>
            <UserForm title="Registrarse" {...REGISTER} />
            <Icon type="submit" onClick={() => handleOnCLickValue(true)}><TiArrowBackOutline size="30px" /></Icon>
          </>
        )}
    </>

  );
};


export default UnregisteredUser;
