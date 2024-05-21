import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
    const [name, setName] = useState("");

    const handleName = (e) => {
      e.preventDefault();

      alert("Bonjour "+name);
      setName("");
    }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Bienvenue chez nous !</h1>

      <form id="card" onSubmit={handleName}>

        <p className="read-the-docs">
          <label>Connectez-vous</label>
        </p>
        <br></br>

        <input 
          required
          id="name"
          name="name" 
          type="text"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
          placeholder="Entrez votre prénom.." />
          <br></br>

        <input 
          type="submit"
          value="Accéder à votre espace" />

      </form>

    </>
  )
}

export default App;
