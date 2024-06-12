import { theme } from "../../theme"
import { useContext } from "react"
import styled from "styled-components"
import Tab from "../../../reusable-ui/Tab"
import OrderContext from "/src/context/OrderContext"
import {FiChevronDown, FiChevronUp} from "react-icons/fi"
import { getTabsConfig } from "./getTabsConfig"

export default function AdminTabs() {

  const { isCollapsed, 
          setIsCollapsed,
          currentTabSelected,
          setCurrentTabSelected } = useContext(OrderContext);

  const selectTab = (tabSelected) => {

    setIsCollapsed(false); // ouvre moi le panel dans tous les cas
    setCurrentTabSelected(tabSelected); // sélectionne moi la tab sélectionnée
  }

  const tabs = getTabsConfig(currentTabSelected);

  //  const tabsConfig = [
    // {
    //   index: "chevronUpDown",
    //   label: "",
    //   Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
    //   onClick: () => setIsCollapsed(!isCollapsed),
    //   className: isCollapsed ? "is-active" : "",
    // }, 
  //   {
  //     index: "add",
  //     label: "Ajouter un produit",
  //     Icon: <AiOutlinePlus />,
  //     className: currentTabSelected === "add" ? "is-active" : "",
  //   }, 
  //   {
  //     index: "edit",
  //     label: "Modifier un produit",
  //     Icon: <MdModeEditOutline />,
  //     className: currentTabSelected === "edit" ? "is-active" : "",
  //   },  
  //  ];

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
                label={tab.label}
                Icon={tab.Icon}
                onClick={() => selectTab(tab.index)}
                className={tab.className}
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
