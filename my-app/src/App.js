import './App.css';
import React, { useRef } from 'react';
import ObjectCollector from './components/ObjectCollector';

function App() {
  const childref = useRef(null);

  const handleWrite = () => {
    childref.current.writeAll();
  };

  return (
    <div className="App">
      <button onClick={handleWrite}>WriteAll</button>
      <br></br>
      <ObjectCollector ref={childref} />
    </div>
  );
}

export default App;
