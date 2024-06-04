import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../reusable-ui/Logo'
import { theme } from '../theme'
import NavbarRightSide from './NavbarRightSide'

export default function Navbar({ username }) {

  return (

    <NavbarStyled>

        <Logo />

        <NavbarRightSide username={username} />        

    </NavbarStyled>

  )
}

const NavbarStyled = styled.nav`

    background: ${theme.colors.white};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    // align-items: center;
`

/*

<Logo />

    border-radius: 15px 15px 0px 0px;
    background-color: ${theme.colors.background_white};
    margin-top: ${theme.gridUnit*2}px;
    justify-content: center;
    align-items: center;
    height: 10vh;
    width: 90%;
    border: 0;
    margin-left: 5%;
    margin-right: 5%;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    .hello {
        display: flex;
        justify-content : center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 5;
        margin-top: -20px;
        margin-right: 5%;
    }

    .name {
        color: ${theme.colors.primary};
        font-weight: ${theme.weights.bold};   
    }

    .deco {
        display: flex;
        justify-content : center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 5;
        margin-top: 2%;
        margin-right: 5%;
    }


*/