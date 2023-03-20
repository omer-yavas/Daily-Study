import React, { useRef } from 'react';
import Child from './Child';

function App() {
  const childref = useRef(null);

  const handleArt = () => {
    childref.current.componenttenArttir();
  };
  const handleAzalt = () => {
    childref.current.componenttenAzalt();
  };
  return (
    <div>
      <p>This is a parent component</p>
      <Child ref={childref} />
      <p>This is again parent component</p>
      <button onClick={handleArt}>Arttir</button>
      <button onClick={handleAzalt}>Azalt</button>
    </div>
  );
}

export default App;
