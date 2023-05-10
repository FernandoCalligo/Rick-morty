import { useEffect, useState, useRef } from 'react'
import './App.css'
import Characters from "./components/Characters.jsx"

function App() {

  const [search, setSearch] = useState ("")

  const inputRef = useRef() 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value
    setSearch(value)
  }

  return (
    <>
      <h1>Rick & Morty Info</h1>
      
      <hr></hr>

      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Busqueda de personaje</label>
        <input ref={inputRef} type="text" name="search" id="search" placeholder='Rick Sanchez, Morty Smith...' />
      </form>
      <Characters search={search}/>
    </>
  )
}

export default App
