/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import PropTypes from 'prop-types';

import {
  Form, Input, Button, Title, Span,
} from './styles';

import { useStateValue } from '../../Context';

import useFormInputValue from '../../hooks/useFormInputValue';

const UserForm = ({
  title, action, loading, error, type, errorMsg,
}) => {
  const [, dispatch] = useStateValue();

  const Email = useFormInputValue('', 'Email');
  const Password = useFormInputValue('', 'Password');

  const UpdateLogin = (event) => {
    event.preventDefault();

    action().then(({ data: { login } }) => {
      if (login) {
        dispatch({
          type: 'UpdateUserLogin',
          payload: login,
        });
        window.localStorage.setItem('tokenCode', login);
        window.location.href = '/';
      } else {
        dispatch({
          type,
          payload: true,
        });
      }
    }).catch(() => dispatch({
      type,
      payload: false,
    }));
  };


  return (
    <>
      <Form onSubmit={UpdateLogin}>
        <Title>{title}</Title>
        <Input disabled={loading} type="email" placeholder="Email" required {...Email} />
        <Input disabled={loading} type="password" placeholder="Password" required {...Password} />
        {loading ? <Button disabled>...Cargando</Button> : <Button type="submit">{title}</Button>}
      </Form>
      {error && <Span>{errorMsg}</Span>}
    </>
  );
};

UserForm.propTypes = {
  title: PropTypes.string,
  action: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string,
  type: PropTypes.string,
  errorMsg: PropTypes.string,
};

export default UserForm;
