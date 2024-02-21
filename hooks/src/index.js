import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [value, setValue] = useState(0)
  const [visible, setVisible] = useState(true)

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue(v => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>

        <Counter value={value}/>
      </div>
    )
  } else {
    return <button onClick={() => setVisible(true)}>Show</button>
  }
}

const Counter = ({value}) => {

  useEffect(() => {
    console.log('use effect')

    return () => console.log('clear')
  }, [value])

  return <p>{value}</p>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
