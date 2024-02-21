import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <HookSwitches />
}

const HookSwitches = () => {
  const [color, setColor] = useState('white')
  const [size, setSize] = useState(16)
  
  return (
      <div style={{padding: '10px', background: color, fontSize: size + 'px'}}>
        <h1>Hello, world</h1>
        <button onClick={() => setColor('black') }>Dark</button>
        <button onClick={() => setColor('white') }>Light</button>
        <button onClick={() => setSize(s => s + 2) }>Bigger</button>
      </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

