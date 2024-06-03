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

          <div className="navbar">
            Navbar
            <h1>Hey,&nbsp;{name}</h1>
            <Link to="/">
                <button>Se Déconnecter</button>
            </Link>
          </div>

          <div className="main">
            Main
          </div>

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

    .navbar {
      background: blue;
      height: 10vh;
    }
    .main {
      background: green;
      flex: 1; // height: calc(95vh - 10vh);
    }

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