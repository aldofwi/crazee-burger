import React from 'react'
import { theme } from '../theme';
import Main from './Main';
import Navbar from './Navbar';
import styled from 'styled-components';

export default function OrderPage() {

  return (

    <OrderPageStyled>

        <div className="container">

          <Navbar />
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
  }
`

/*
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