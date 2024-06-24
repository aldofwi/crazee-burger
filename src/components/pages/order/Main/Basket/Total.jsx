import styled from "styled-components"
import Header from "../../../../reusable-ui/Header"
import { theme } from "../../../../../theme"

export default function Total({ amountToPay }) {

  return (

    <Header>

        <TotalStyle>
            <span className="total">TOTAL</span>
            <span className="amount">{amountToPay}</span>
        </TotalStyle>
        
    </Header>

  )
}

const TotalStyle = styled.div`

    height: 100%;
    display: flex;
    
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primary};

    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    letter-spacing: 2px;
`