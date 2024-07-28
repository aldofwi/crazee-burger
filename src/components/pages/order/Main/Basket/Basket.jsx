import { calculateSumToPay, formatPrice } from "../../../../../utils/maths"
import OrderContext from "../../../../../context/OrderContext"
import { isEmpty } from "../../../../../utils/array"
import BasketProducts from "./BasketProducts"
import { theme } from "../../../../../theme"
import EmptyBasket from "./EmptyBasket"
import styled from "styled-components"
import { useContext } from "react"
import Footer from "./Footer"
import Total from "./Total"
import Loader from "../MainRightSide/Menu/Loader"

export default function Basket() {

  const { basket, menu } = useContext(OrderContext);

  if(menu === undefined) return <Loader />

  return (
    <BasketStyle>

        <Total />
        {isEmpty(basket) ? 
          <EmptyBasket /> : 
          <BasketProducts />}
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

