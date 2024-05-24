import { useState, React} from 'react'

export default function LoginPage() {
 
    const [name, setName] = useState("");

    const handleName = (e) => {
        e.preventDefault();

<<<<<<< HEAD
        alert("Bonjour "+name);
=======
        alert(`Bonjour ${name}`);
>>>>>>> d53d00eb9d406406f59f6cbf510bf78989aae418
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
