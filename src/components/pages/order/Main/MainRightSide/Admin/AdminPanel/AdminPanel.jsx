import { useContext } from "react";
import { theme } from '/src/components/pages/theme'
import styled from "styled-components"
import OrderContext from "/src/context/OrderContext";
import { tabsConfig, getTabSelected } from "../tabsConfig";

export default function AdminPanel() {

  const { currentTabSelected } = useContext(OrderContext);

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (

    <AdminPanelStyled>
    
      {tabSelected && tabSelected.Content}
      
    </AdminPanelStyled>
    
  )
}

const AdminPanelStyled = styled.div`

  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 30px 5%; // 30px en haut & en bas // 5% gauche droite

`