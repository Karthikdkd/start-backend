import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() =>{
    axios.get('/api/jokes')
    .then((response) => {
      console.log(response)
      setJokes(response.data)
    }) 
    .catch((error) => {
      console.error("error", error)
    });
  })

// CORs -> Cross origin requests -> dont allow all request. only same origin requests are allowed. Need whitelisting of IP

  return (
    <>
      <h1>Front End</h1>
      <p>Jokes: {jokes.length}</p>

      {
      jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.type}</h3>
        </div>
      ))
      }
    </>
  )
}

export default App
