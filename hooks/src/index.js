import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <HookSwitches />
}

const HookSwitches = () => {
  const [color, setColor] = useState('white')
  
  return (
      <div style={{padding: '10px', background: color}}>
        <button onClick={() => setColor('black') }>Dark</button>
        <button onClick={() => setColor('white') }>Light</button>
      </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

