import React from 'react';
import cn from 'classnames';
import { useRoutes } from 'hookrouter';
import routes from './routes';

import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Menu from './components/Menu';

import ErrorPage from './pages/ErrorPage';

import s from './App.module.scss';

const App = () => {
  const match = useRoutes(routes);

  const result = match ? (
    <>
      <Header>
        <Menu />
      </Header>
      <MainContent>{match}</MainContent>
      <Footer />
    </>
  ) : (
    <ErrorPage />
  );

  return <div className={cn(s.app)}>{result}</div>;
};

export default App;
