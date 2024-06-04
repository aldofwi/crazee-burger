import { theme } from '../theme';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

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

  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    //background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    padding: 0 10px 0 10px;
    border-radius: ${theme.borderRadius.extraRound};

  }
  
`