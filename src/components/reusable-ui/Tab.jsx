import styled from "styled-components"
import { theme } from "../../theme"

export default function Tab({ label, Icon, onClick, className }) {

  return (

    <TabStyled onClick={onClick} className={className}>
    
        <div className="icon">{Icon}</div>
        {label && <span className="label">{label}</span>}
    
    </TabStyled>

  )
}

const TabStyled = styled.button`

    border: 1px solid blue;
    height: 43px;
    padding: 0 22px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    position: relative;
    left: 5%;
    top: 1px;

    // FONTS
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.greySemiDark};
    box-shadow: ${theme.shadows.subtle};
    background: ${theme.colors.white};

    border-style: solid;
    border-width: 1px 1px 2px 1px;
    border-color: ${theme.colors.greyLight};
    border-radius: 5px 5px 0px 0px;

    &:hover {
        border-bottom: 2px solid ${theme.colors.white};
        text-decoration: underline;
    }

    .icon {
        display: flex;
    }

    .label {
      margin-left: 13px;
    }
`
