import { useContext } from "react"
import styled from "styled-components"
import { getTabsConfig } from "./tabsConfig"
import Tab from "/src/components/reusable-ui/Tab"
import { theme } from "/src/components/pages/theme"
import OrderContext from "/src/context/OrderContext"
import {FiChevronDown, FiChevronUp} from "react-icons/fi"

export default function AdminTabs() {

  const { isCollapsed, 
          setIsCollapsed,
          currentTabSelected,
          setCurrentTabSelected } = useContext(OrderContext);

  const selectTab = (tabSelected) => {

    setIsCollapsed(false); // ouvre moi le panel dans tous les cas
    setCurrentTabSelected(tabSelected); // sélectionne moi la tab sélectionnée
  }

  const tabs = getTabsConfig();

  return (

    <AdminTabsStyled>

        <Tab 
            label={""}
            Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={isCollapsed ? "is-active" : ""}
        />

        {tabs.map((tab) => {
          return( 
            <Tab 
                key={tab.index}
                label={tab.label}
                Icon={tab.Icon}
                onClick={() => selectTab(tab.index)}
                className={currentTabSelected === tab.index ? "is-active" : ""}
            />)
        })}
    
    </AdminTabsStyled>

  )
}

const AdminTabsStyled = styled.div`

    display: flex;
    padding: 0 20px;
    
    .is-active {
      color: ${theme.colors.white};
      border-color: ${theme.colors.background_dark};
      background: ${theme.colors.background_dark};
    }

    button {
      margin-left: 1px;
    }
`
