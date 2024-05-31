import { useState, React} from 'react'
import { useNavigate } from 'react-router-dom';
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from 'react-icons/bs';
import { styled } from 'styled-components';
import { theme } from '../theme';
import TextInput from '../../reusable-ui/TextInput';
import PrimaryButton from '../../reusable-ui/PrimaryButton';


export default function LoginForm() {

    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => { 
      navigate(`order/${name}`);
      setName("");
     }

    const handleName = (e) => {
        e.preventDefault();

        setName(e.target.value); 
    }

  return (
    
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>

        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
          
        <br />
        
        <div>
          <TextInput
            value={name}
            onChange={handleName}
            placeholder={"Entrez votre prénom"}
            iconBeforeInput={<BsPersonCircle className="icon" />}
            required
          />

          <PrimaryButton 
            label={"Accéder à mon espace"}
            iconAfterButton={<IoChevronForward className="icon" />}
          />
            
        </div>

    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`

  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit*5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
  }

  h2 {
    margin: 20px 10px 10px;
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.white};
  }

  .icon {
        display: flex;
        justify-content : center;
        align-items: center;
        font-size: ${theme.fonts.P0};
        margin-left: 10px;
      }

`