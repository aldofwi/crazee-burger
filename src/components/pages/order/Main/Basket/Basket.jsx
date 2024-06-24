import { formatPrice } from "../../../../../utils/maths"
import styled from "styled-components"
import BasketBody from "./BasketBody"
import Total from "./Total"
import Footer from "./Footer"

export default function Basket() {

  return (
    <BasketStyle>

        <Total amountToPay={formatPrice(0)} />
        <BasketBody />
        <Footer />
        
    </BasketStyle>
  )
}

const BasketStyle = styled.div`

    display: flex;
    flex-direction: column;

`
