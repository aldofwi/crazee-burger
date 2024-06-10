import styled from "styled-components";
import { theme } from "../pages/theme";

export default function TextInput({ value, onChange, iconBeforeInput, ...extraProps }) {

  return (

    <TextInputStyled>
        {iconBeforeInput && iconBeforeInput}
        <input
            value={value}
            onChange={onChange}
            type="text"
            {...extraProps}
         />
    </TextInputStyled>

  )
}

// Un style propre à cet Input.
const TextInputStyled = styled.div`

    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      font-size: ${theme.fonts.SM};
      margin-right: 8px;
      color: ${theme.colors.greySemiDark};
    }

    input {
      border: none;
      font-size: ${theme.fonts.SM};
      color: ${theme.colors.dark};
      width: 100%;

      &::placeholder {
        background: ${theme.colors.white};
        color: ${theme.colors.greyLight};
      }
    }
`