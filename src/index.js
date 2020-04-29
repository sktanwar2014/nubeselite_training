import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import GlobalStyle from './utils/globals';

import store from './store';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (typeof Object.assign != 'function') {
  Object.assign = function (target, varArgs) { // .length of function is 2
    'use strict';
    if (target == null) { // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) { // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <Helmet>
          <title>Nubes Elite Training</title>
          <meta
            name="description"
            content="Project Description"
          />
          <link rel="canonical" href="website link" />
        </Helmet>
        <App isLoading={false} />
        <GlobalStyle />
      </>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
