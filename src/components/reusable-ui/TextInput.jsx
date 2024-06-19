import styled, { css } from "styled-components";
import { theme } from "../pages/theme";

export default function TextInput({ value, onChange, iconBeforeInput, className, version="normal", ...extraProps }) {

  return (

    <TextInputStyled className={className} version={version}>
        <div className="icon">{iconBeforeInput && iconBeforeInput}</div>
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

    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    // margin: 18px 0; // must be handled in parent too.

    .icon {
      display: flex; // center icon vertically
      margin: 0 13px 0 8px; // top 0 right 8 bottom 0 left 10
      font-size: ${theme.fonts.size.SM};
    }

    input {
      border: none;
      font-size: ${theme.fonts.size.SM};
      width: 100%;

      &::placeholder {
        color: ${theme.colors.greyMedium};
      }
    }

    // Notion de Dictionnaire via props destructurées.
    ${({ version }) => extraStyle[version]}
`

const extraNormalStyle = css`
  background: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`

const extraMinimalistStyle = css`
  background: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};

    &:focus {
      outline: 0; // add outline
    }
  }
`

const extraStyle = {
  normal: extraNormalStyle,
  minimalist: extraMinimalistStyle,
}