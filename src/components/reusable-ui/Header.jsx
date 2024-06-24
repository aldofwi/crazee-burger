import styled from "styled-components"
import { theme } from "../../theme"

export default function Header({ children }) {

  return (

    <HeaderStyle>
    
        {children}
        
    </HeaderStyle>

  )
}

const HeaderStyle = styled.div`

    background: ${theme.colors.background_dark};
    color: ${theme.colors.primary};

    height: 70px;
    padding: 0 16px;

`