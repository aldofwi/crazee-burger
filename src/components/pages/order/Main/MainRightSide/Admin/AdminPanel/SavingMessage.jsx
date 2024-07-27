import { BsCloudCheck } from "react-icons/bs"
import styled from "styled-components"
import { theme } from "../../../../../../../theme"

export default function SavingMessage() {

  return (
    
    <SavingMessageStyle>
        <div className="icon">
            <BsCloudCheck />
        </div>
        <span className="sentence">Modifications Enregistrées !</span>
    </SavingMessageStyle>

  )
}

const SavingMessageStyle = styled.div`

    display: flex;
    color: ${theme.colors.blue};
    font-size: ${theme.fonts.size.SM};

    .icon {
        font-size: ${theme.fonts.size.P2};
        display: flex;
        margin: 0 10px;
    }
`
