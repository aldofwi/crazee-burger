import { useState, React} from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleName = (e) => {
        e.preventDefault();

        setName("");
        navigate(`order/${name}`);
    }

  return (
    <form id="card" onSubmit={handleName}>

        <h1>Bienvenue chez nous !</h1>
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
  )

}
