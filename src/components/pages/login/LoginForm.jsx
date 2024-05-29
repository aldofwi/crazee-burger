import { useState, React} from 'react'
import { useNavigate } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs";
import { styled } from 'styled-components';
import { theme } from '../theme';


export default function LoginForm() {

    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleName = (e) => {
        e.preventDefault();

        setName("");
        navigate(`order/${name}`);
    }

  return (
    <LoginFormStyled onSubmit={handleName}>

        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connectez-vous</h2>
          <BsPersonCircle />
        <br />
        
        <div>
          <input
            required
            id="name"
            name="name"
            type="text"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
            placeholder="Entrez votre prénom" />
            
          <button type="submit">Accéder à mon espace {'>'}</button>
        </div>

    </LoginFormStyled>
  )

}

const LoginFormStyled = styled.div`

  background: green;
  /* h1 {
    font-size: 50px;
    font-family: "Amatic SC";
    color: ${theme.colors.white};
    background-color: transparent;
  }

  h2 {  
    font-size: 30px;
    font-family: "Amatic SC";
    color: ${theme.colors.white};
    background-color: transparent;
  }

  input {
    width: 400px;
    height: 55px;
    border: 1px solid;
    font-family: "Open Sans";
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
  }

  button {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    border: 1px solid;
    font-family: "Open Sans";
    font-size: 15px;
    width: 400px;
    height: 53px;
  } */

`