import React from 'react';
import ReactDOM from 'react-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { StateProvider } from './Context';

import App from './App';

const tokenCode = window.localStorage.getItem('tokenCode');

const client = new ApolloClient({
  uri: 'https://api-petgram-sigma.vercel.app/graphql',
  request: (operation) => {
    const authorization = tokenCode ? `Bearer ${tokenCode}` : '';
    operation.setContext({
      headers: {
        authorization,
      },
    });
  },
  onError: (error) => {
    const { networkError } = error;
    if (networkError && networkError.result.code === 'invalid_token') {
      window.localStorage.removeItem('tokenCode');
      window.location.href = '/';
    }
  },
});

const InitialState = {
  isAuth: tokenCode,
  sectionLogin: true,
  email: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UpdateUserLogin':
      return { ...state, isAuth: action.payload };
    case 'sectionLogin':
      return { ...state, sectionLogin: action.payload };
    case 'Email':
      return { ...state, email: action.payload };
    case 'Password':
      return { ...state, password: action.payload };

    default:
      return state;
  }
};

ReactDOM.render(
  <StateProvider initialState={InitialState} reducer={reducer}>

    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StateProvider>,
  document.getElementById('app'),
);
