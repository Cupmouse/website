import React, { Component } from 'react';
import { BrowserRouter, Route,  } from 'react-router-dom';

import AppFooter from './AppFooter';
import TopMenu from './TopMenu';
import HomePage from './pages/HomePage';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <TopMenu />
        </header>
        <BrowserRouter>
          <Route path="/" component={HomePage} />
        </BrowserRouter>
        <AppFooter />
      </div>
    );
  }
}

