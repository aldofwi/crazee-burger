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
        <hr />
        <h2>Connectez-vous</h2>
          
        <br />
        
        <div>
          <div className="input-with-icon">
            <BsPersonCircle className="icon" />
            <input
              required
              id="name"
              name="name"
              type="text"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
              placeholder="Entrez votre prénom" />
          </div>
            
          <button type="submit">Accéder à mon espace {'>'}</button>
        </div>

    </LoginFormStyled>
  )

}

const LoginFormStyled = styled.div`

  background: green;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1 {
    color: white;
    font-size: 48px;
  }

  h2 {
    color: #8e8b8b;
    margin: 20px 10px 10px;
    color: white;
    font-size: 36px;
  }

  .input-with-icon {
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1;
    }

    input {
      border: none;
      font-size: 15px;
      color: #17161a;
    }

    &::placeholder {
      background: white;
      color: lightgrey;
    }
  }


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