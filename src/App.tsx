import React from 'react';
import cn from 'classnames';

import { Router, Redirect, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Menu from './components/Menu';

import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';

import s from './App.module.scss';
import ErrorPage from './pages/ErrorPage';

const customHistory = createBrowserHistory();

const App = () => {
  return (
    <div className={cn(s.app)}>
      <Router history={customHistory}>
        <Switch>
          <Route
            render={(props) => {
              return (
                <>
                  <Header>
                    <Menu />
                  </Header>
                  <MainContent>
                    <Switch>
                      <Route path="/" component={HomePage} exact />
                      <Route path="/home" render={() => <Redirect to="/" />} />
                      <Route path="/pokedex" component={PokedexPage} />
                      <Route component={ErrorPage} />
                    </Switch>
                  </MainContent>
                  <Footer />
                </>
              );
            }}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
