import { useState, React} from 'react'
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../../../api/user';
import { IoChevronForward } from 'react-icons/io5';
import { BsPersonCircle } from 'react-icons/bs';
import TextInput from '../../reusable-ui/TextInput';
import Button from '../../reusable-ui/Button';
import styled from 'styled-components';
import { theme } from '../../../theme';
import Welcome from './Welcome';


export default function LoginForm() {

    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => { 
      event.preventDefault();

      authenticateUser(name);

      navigate(`order/${name}`);
      setName("");
     }

    const handleName = (e) => {
        e.preventDefault();
        setName(e.target.value); 
    }

  return (
    
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>

        <Welcome />
        <br />
        
        <div>
          <TextInput
            value={name}
            onChange={handleName}
            placeholder={"Entrez votre prénom"}
            iconBeforeInput={<BsPersonCircle />}
            className="input-login"
            //version="normal"
            required
          />

          <Button 
            label={"Accéder à mon espace"}
            iconAfterButton={<IoChevronForward  />}
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
    border: 1.5px solid ${theme.colors.primary};
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

  .input-login {
    margin: 18px 0; // handled in parent.
  }

`