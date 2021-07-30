import React, { useState } from 'react';

export default function Product() {
  const [color, setColor] = useState('red');

  return (
    <div style={{ color }}>a
      <button onClick={() => setColor('green')}>Clicka em mim</button>
    </div>
  );
}