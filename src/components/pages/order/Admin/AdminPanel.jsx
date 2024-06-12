import { useContext } from "react";
import { theme } from '../../theme'
import styled from "styled-components"
import OrderContext from "/src/context/OrderContext";

export default function AdminPanel() {

  const { currentTabSelected } = useContext(OrderContext);

  return (

    <AdminPanelStyled>
    
      {currentTabSelected === "add" && "Ajouter un produit"}
      {currentTabSelected === "edit" && "Modifier un produit"}
      
    </AdminPanelStyled>
    
  )
}

const AdminPanelStyled = styled.div`

  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`