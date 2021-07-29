import React, { useContext } from 'react';
import { routerContext } from '../router/Navigator';
import './App.scss';

export default function App() {
  const { Component } = useContext(routerContext);
  return <Component></Component>;
}
