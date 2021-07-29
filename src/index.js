import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Navigator from './router/Navigator';
import './index.scss';

render(
  <Navigator>
    <App></App>
  </Navigator>,
  document.querySelector('#root')
);
