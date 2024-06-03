import { Link } from "react-router-dom"
import styled from "styled-components"

export default function NavbarRightSide({ username }) {

  return (

    <NavbarRightSideStyled>
        Right
        <h1>Hey,&nbsp; {username}</h1> ✨ 🚀

        <Link to="/">
            <button>Se Déconnecter</button>
        </Link>
    </NavbarRightSideStyled>

  )
}


const NavbarRightSideStyled = styled.nav`

  background: purple;

`