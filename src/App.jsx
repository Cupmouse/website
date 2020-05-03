import React, { Component } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import AppFooter from './AppFooter';
import TopMenu from './TopMenu';
import HomePage from './pages/HomePage';
import { STRIPE_PUBLIC } from './constants';

const stripePromise = loadStripe(STRIPE_PUBLIC);

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <TopMenu />
        </header>
        <Elements stripe={stripePromise}>
          <HomePage />
        </Elements>
        <AppFooter />
      </div>
    );
  }
}

