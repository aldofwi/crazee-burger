import { useState, React} from 'react'
import { useNavigate } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
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
            
          <button className="button-with-icon">
            <span type="submit">Accéder à mon espace</span>
            <IoChevronForward className="icon" />
          </button>
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
      width: 100%;
    }

    &::placeholder {
      background: white;
      color: lightgrey;
    }
  }

  .button-with-icon {
    width: 100%;
    border: 1px solid red;
    display: inline-flex;
    justify-content : center;
    align-items: center;
    position: relative;     // in case we create interactive elements
    white-space: nowrap;    // Prevent the text label from wrapping
    text-decoration: none;  // Remove the text decoration
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;
  
      &:hover:not(:disabled) {
        background-color: white;
        color: #ff9f1b;
        border: 1px solid #ff9f1b;
        transition: all 200ms ease-out;
      }

      &:active {
        color: white;
        background-color: #ff9f1b;
        border: 1px solid #ff9f1b;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .icon {
        display: flex;
        justify-content : center;
        align-items: center;
        font-size: 15px;
        margin-left: 10px;
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