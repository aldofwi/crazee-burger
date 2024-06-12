import { theme } from '../theme';
import { useState } from 'react';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import styled from 'styled-components';
import OrderContext from '../../../context/OrderContext';

export default function OrderPage() {

  const [isModeAdmin, setIsModeAdmin]       = useState(false);
  const [isCollapsed, setIsCollapsed]       = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected, 
    setCurrentTabSelected
  }

  return (


      <OrderContext.Provider value={orderContextValue}>
        <OrderPageStyled>

            <div className="container">
                <Navbar />
                <Main />
            </div>

        </OrderPageStyled>
      </OrderContext.Provider>

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