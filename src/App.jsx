import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ReactGA from 'react-ga';

import AppFooter from './AppFooter';
import TopMenu from './TopMenu';
import HomePage from './HomePage';
import { STRIPE_PUBLIC } from './constants';

const stripePromise = loadStripe(STRIPE_PUBLIC);

ReactGA.initialize('UA-154580457-2');
ReactGA.pageview(window.location.pathname + window.location.search);

export default function App() {
  return (
    <div>
      <TopMenu />
      <Elements stripe={stripePromise}>
        <HomePage />
      </Elements>
      <AppFooter />
    </div>
  );
}
