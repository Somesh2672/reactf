import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from '../src/Redux/store'; // Import your Redux store

import App from './App';

render(
  <Provider store={store}> {/* Wrap your App component with the Provider and pass the Redux store */}
    <App />
  </Provider>,
  document.getElementById('root')
);
