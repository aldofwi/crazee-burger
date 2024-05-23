import { useState, React} from 'react'

export default function LoginPage() {
 
    const [name, setName] = useState("");

    const handleName = (e) => {
        e.preventDefault();

        alert(`Bonjour ${name}`);
        setName("");
    }

  return (
    <div>

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
          placeholder="Entrez votre prénom" />
          <br></br>

        <input 
          type="submit"
          value="Accéder à votre espace" />
      </form>

    </div>
  )
  
}
