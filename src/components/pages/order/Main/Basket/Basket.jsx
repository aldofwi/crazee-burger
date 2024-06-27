import OrderContext from "../../../../../context/OrderContext"
import { formatPrice } from "../../../../../utils/maths"
import BasketProducts from "./BasketProducts"
import EmptyBasket from "./EmptyBasket"
import styled from "styled-components"
import { useContext } from "react"
import Footer from "./Footer"
import Total from "./Total"
import { theme } from "../../../../../theme"

export default function Basket() {

  const { basket } = useContext(OrderContext);

  const isBasketEmpty = basket.length === 0;

  return (
    <BasketStyle>

        <Total amountToPay={formatPrice(0)} />
        {isBasketEmpty ? <EmptyBasket /> : <BasketProducts basket={basket} />}
        <Footer />
        
    </BasketStyle>
  )
}

const BasketStyle = styled.div`
    
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    height: 85vh;

    .head {
      position: sticky;
      top: 0;
    }

    .footer {
      border-bottom-left-radius: ${theme.borderRadius.extraRound};
      position: sticky;
      bottom: 0;
    }
`