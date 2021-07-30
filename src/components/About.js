import React, { useEffect, useRef, useState } from 'react';
import { routerContext } from '../providers-context';

function useClicks() {
  return useState(0);
}

export default function About() {
  const [clicks, setClicks] = useClicks();
  const { pushRoute } = useContext(routerContext);

  const containerRef = useRef();

  useEffect(() => {
    console.log('Component montado', containerRef.current);

    return () => {
      console.log('Component desmontado');
    };
  }, [clicks]);

  console.log('renderizado');

  const version = '1.4';

  return (
    <div ref={containerRef}>
      version {version}
      <br></br>
      about<br></br>
      <button onClick={() => pushRoute('/')}>Go to Home</button>
      <button onClick={() => setClicks(clicks + 1)}>Clicou {clicks}</button>
    </div>
  );
}
