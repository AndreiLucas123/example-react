import React, { useContext } from 'react';
import { routerContext } from '../providers-context';
import './App.scss';

export default function Home() {
  const { pushRoute } = useContext(routerContext);

  return (
    <div className='app'>
      saaaaaaaaaaaa
      <button onClick={() => pushRoute('/asdf')}>Go to NotFound</button>
    </div>
  );
}
