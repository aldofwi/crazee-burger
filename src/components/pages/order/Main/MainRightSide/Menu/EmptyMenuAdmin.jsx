import styled from "styled-components"
import { theme } from "../../../../../../theme"
import Button from "../../../../../reusable-ui/Button"

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyMenuAdminStyled>

        <span className="title">Le menu est vide ?</span>
        <span className="description">Cliquez ci-dessous pour le réinitialiser</span>
        <Button label={"Générer de nouveaux produits"} onClick={onReset} />
        
    </EmptyMenuAdminStyled>

  )
}

const EmptyMenuAdminStyled = styled.div`

  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; // diminuer la largeur du bouton reset

  .title,
  .description {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
  }

  .title {
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.semiBold};
  }

  .description {
    font-size: ${theme.fonts.size.P4};
    margin-top: 20px;
  }

  button {
    margin-top: 30px;
    font-size: ${theme.fonts.size.XS};
    width: auto;
  }
`