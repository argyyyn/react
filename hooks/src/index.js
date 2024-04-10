import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom/client"

const App = () => {
  const [value, setValue] = useState(1)
  const [visible, setVisible] = useState(true)

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue(v => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>

        <Counter value={value}/>
        <Notification />
        <PlanetInfo id={value} />
      </div>
    )
  } else {
    return <button onClick={() => setVisible(true)}>Show</button>
  }
}

const usePlanetInfo = id => {
  const [name, setName] = useState(null)

  useEffect(() => {
    let canceled = false
    fetch('https://swapi.dev/api/planets/' + id)
      .then(res => res.json())
      .then(data => !canceled && setName(data.name))

    return () => canceled = true
  }, [id]);

  return name
}
const Counter = ({value}) => {
  useEffect(() => {
    console.log('mounted')
    return () => console.log('unmounted')
  }, [])

  useEffect(() => { console.log('update') })

  return <p>{value}</p>
}

const Notification = () => {
  return <div><p>Notify message</p></div>
}

const PlanetInfo = ({id}) => {
  const name = usePlanetInfo(id)

  return <div>{id} {name}</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
