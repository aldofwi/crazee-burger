import Menu from './Menu/Menu';
import Admin from './Admin/Admin';
import { useContext } from "react";
import styled from "styled-components";
import { theme } from '../../../../../theme';
import OrderContext from "/src/context/OrderContext"

export default function MainRightSide() {

    const {isModeAdmin} = useContext(OrderContext);

  return (
    <MainRightSideStyled>

        <Menu />
        {isModeAdmin && <Admin />}

    </MainRightSideStyled>
  )
}

const MainRightSideStyled = styled.div`

    position: relative;
    overflow-y: hidden;
    display: grid;
    //border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
`

  // position absolte va être relatif 
  // au 1er parent qu'il trouve (menu)