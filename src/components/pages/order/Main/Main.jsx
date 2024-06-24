import MainRightSide from './MainRightSide/MainRightSide';
import styled from 'styled-components';
import { theme } from '../../../../theme';
import Basket from './Basket/Basket';

export default function Main() {

  return (

    <MainStyled>

      <Basket />
      <MainRightSide />
      
    </MainStyled>
    
  )
}

const MainStyled = styled.div`

  // flex: 1;
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh); // Hauteur Main - Hauteur Navbar

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  display: grid;
  grid-template-columns: 25% 1fr;
  overflow: hidden;
`