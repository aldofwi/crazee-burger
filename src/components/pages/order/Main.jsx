import styled from 'styled-components'
import { theme } from '../theme'
import Menu from './Menu'

export default function Main() {

  return (

    <MainStyled>
      
      <div class="basket">Basket</div>

      <div class="menu">Menu</div>

    </MainStyled>
    
  )
}

const MainStyled = styled.div`

  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  //border-radius: 0px 0px 15px 15px;
  flex: 1; // height: calc(95vh - 10vh);

  display: grid;
  grid-template-columns: 25% 1fr ;

  .basket {
    background: pink;
  } 

  .menu {
    background: purple;
  }
`