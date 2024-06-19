import MainRightSide from './MainRightSide/MainRightSide';
import styled from 'styled-components';
import { theme } from '../../theme';

export default function Main() {

  return (

    <MainStyled>
      {/* <div className="basket">Basket</div> */}
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
  box-shadow: ${theme.shadows.strong};

  display: grid;
  grid-template-columns: 1fr;

  /* .basket {
    background: pink;
    border: 1px solid black;
  } */
`