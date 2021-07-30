import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import RouterProvider from './router/RouterProvider';
import './index.scss';

render(
  <RouterProvider>
    <App></App>
  </RouterProvider>,
  document.querySelector('#root')
);
