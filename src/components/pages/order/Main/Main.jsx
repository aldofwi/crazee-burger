import { useContext } from 'react';
import styled from 'styled-components'
import OrderContext from '../../../../context/OrderContext';
import { theme } from '../../theme'
import Admin from '../Admin/Admin'
import Menu from '../Main/Menu'

export default function Main() {

  const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext);

  return (

    <MainStyled>
      
      {/* <div className="basket">Basket</div> */}

      <div className="menu-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>

    </MainStyled>
    
  )
}

const MainStyled = styled.div`

  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh); // Hauteur Main - Hauteur Navbar
  // flex: 1; 
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  //border-radius: 0px 0px 15px 15px;

  display: grid;
  grid-template-columns: 1fr;
  // grid-template-columns: 25% 1fr;

  /* .basket {
    background: pink;
  } */

  // position absolte va être relatif 
  // au 1er parent qu'il trouve (menu)
  .menu-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};

  }

`