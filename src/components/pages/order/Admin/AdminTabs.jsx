import styled from "styled-components"
import Tab from "../../../reusable-ui/Tab"
import {FiChevronDown, FiChevronUp} from "react-icons/fi"
import { theme } from "../../theme"

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {

  return (

    <AdminTabsStyled>
    
        <Tab 
          Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />} 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className={isCollapsed ? "is-active" : ""}
          />
    
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
`
