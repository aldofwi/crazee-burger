import { theme } from "../../../../../theme";
import styled from "styled-components";

export default function EmptyBasket() {

    return (
    
    <EmptyBasketStyle>
      <span className="empty-message">Votre commande est vide.</span>
    </EmptyBasketStyle>
    
    )

}

const EmptyBasketStyle = styled.div`

    flex: 1;
    box-shadow: ${theme.shadows.basket};
    background: ${theme.colors.background_white}; 

    .empty-message {
      display: flex;
      text-align: center; 
      align-self: center;
      align-items: center;
      justify-content: center;

      flex: 1;
      line-height: 2;
      color: ${theme.colors.greyBlue};
      font-size: ${theme.fonts.size.P3};
      font-family: ${theme.fonts.family.stylish};
      height: calc(95vh - 10vh - 70px - 70px);
    }
`


