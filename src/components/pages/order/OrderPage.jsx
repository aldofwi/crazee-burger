import { theme } from '../theme';
import Main from './Main';
import Navbar from './Navbar';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

export default function OrderPage() {

  const {name} = useParams();

  return (

    <OrderPageStyled>

        <div className="container">

            <Navbar username={name} />
            <Main />

        </div>

    </OrderPageStyled>

  )
}

const OrderPageStyled = styled.div`

  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};

  }
  
`

/*
          <Navbar />
          <Main />

height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  background-size: cover;
    <div>
        <p><label>Bonjour {name}</label></p>

        <h2>OrderPage</h2> 

        <Link to="/">
            <button>Déconnexion</button>
        </Link>
    </div>

*/