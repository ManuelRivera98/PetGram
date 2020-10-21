import React, { lazy, Suspense } from 'react';

import { Router, Redirect } from '@reach/router';

import Layout from './components/Layout/Layout';

import { useStateValue } from './Context';

import Details from './pages/Details';

const Home = lazy(() => import('./pages/Home'));
const Favorites = lazy(() => import('./pages/Favorites'));
const User = lazy(() => import('./pages/User/index'));
const UnregisteredUser = lazy(() => import('./pages/UnregisteredUser/index'));
const NotFound = lazy(() => import('./pages/NotFound/index'));

const App = () => {
  const [{ isAuth }] = useStateValue();

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Layout>
          <Router>
            <Home path="/" />
            <Home path="/pet/:CategoryId" />
            <Details path="/detail/:detailId" />
            {!isAuth && <UnregisteredUser path="/login" /> }
            {!isAuth && <Redirect noThrow from="/user" to="/login" />}
            {!isAuth && <Redirect noThrow from="/favorites" to="/login" />}
            {isAuth && <Redirect noThrow from="/login" to="/" />}
            <Favorites path="/favorites" />
            <User path="/user" />
            <NotFound default />
          </Router>
        </Layout>
      </Suspense>
    </>
  );
};

export default App;
