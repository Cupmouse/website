import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ReactGA from 'react-ga';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { STRIPE_PUBLIC, PRICE_URL } from './constants';
import AppFooter from './AppFooter';
import TopMenu from './TopMenu';
import HomePage from './home/HomePage';
import Pricing from './pricing/Pricing';

const stripePromise = loadStripe(STRIPE_PUBLIC);

ReactGA.initialize('UA-154580457-2');
ReactGA.pageview(window.location.pathname + window.location.search);

export default function App() {
  return (
    <BrowserRouter>
      <TopMenu />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path={PRICE_URL}>
          <Elements stripe={stripePromise}>
            <Pricing />
          </Elements>
        </Route>
      </Switch>
      <AppFooter />
    </BrowserRouter>
  );
}
