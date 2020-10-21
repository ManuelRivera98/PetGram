/* eslint-disable import/no-extraneous-dependencies */
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const REGISTER = gql`
mutation signup($input: UserCredentials!) {
    signup (input: $input)
  }
`;

const useRegisterUser = (email, password) => {
  const [
    register, { data, loading, error },
  ] = useMutation(REGISTER, { variables: { input: { email, password } } });
  return {
    register, data, loading, error,
  };
};

export default useRegisterUser;
