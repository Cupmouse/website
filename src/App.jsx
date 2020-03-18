import React, { Component } from 'react';

import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <AppContent />
        <AppFooter />
      </div>
    );
  }
}

