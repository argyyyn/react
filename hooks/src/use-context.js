import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';

const myContext = React.createContext()

const App = () => {
  return (
    <myContext.Provider value="argo">
      <Child/>
    </myContext.Provider>
  )
}

const Child = () => {
  const val = useContext(myContext)
  return <p>{val}</p>
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

