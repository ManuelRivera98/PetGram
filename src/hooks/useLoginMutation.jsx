/* eslint-disable import/no-extraneous-dependencies */
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const LOGIN = gql`
mutation login($input: UserCredentials!) {
    login (input: $input)
  }
`;

const useLoginUser = (email, password) => {
  const [
    Login, { data, loading, error },
  ] = useMutation(LOGIN, { variables: { input: { email, password } } });
  const dataLogin = data;
  const loadingLogin = loading;
  const errorLogin = error;
  return {
    Login, dataLogin, loadingLogin, errorLogin,
  };
};

export default useLoginUser;
