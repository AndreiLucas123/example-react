import React from 'react';
import { pushRoute } from '../router/Navigator';
import './App.scss';

export default function Home() {
  const a = true;
  console.log(a + ' aaa');
  return (
    <div className='app'>
      saaaaaaaaaaaa {a}
      <button onClick={() => pushRoute('/asdf')}>Go to NotFound</button>
    </div>
  );
}
