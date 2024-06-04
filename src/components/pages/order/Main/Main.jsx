import styled from 'styled-components'
import { theme } from '../../theme'
import Menu from '../Main/Menu'

export default function Main() {

  return (

    <MainStyled>
      
      <Menu />

    </MainStyled>
    
  )
}

const MainStyled = styled.div`

  background: ${theme.colors.background_white};
  flex: 1; // height: calc(95vh - 10vh);

  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  //border-radius: 0px 0px 15px 15px;

  display: grid;
  grid-template-columns: 1fr;

  overflow-y: scroll;

  /* 
  <div class="basket">Basket</div>
  grid-template-columns: 25% 1fr;

  .basket {
    background: pink;
  }  */

  .menu {
    background: purple;
  }
`