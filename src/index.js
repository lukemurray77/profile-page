/* eslint react/jsx-filename-extension: 0 */

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


import App from './components/app/app';
import Home from './components/home/home';

import './index.css';


ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
