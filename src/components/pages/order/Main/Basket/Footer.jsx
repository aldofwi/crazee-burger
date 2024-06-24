import Header from "../../../../reusable-ui/Header"
import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function Footer() {

  return (

    <Header>

        <FooterStyle>
            <span>Codé avec 💙 & React.js</span>
        </FooterStyle>

    </Header>

  )
}

const FooterStyle = styled.div`

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P2};
    font-family: ${theme.fonts.family.stylish};
    font-weight: ${theme.fonts.weights.bold};
  }
`
