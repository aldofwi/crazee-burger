import styled, { css } from "styled-components"
import { theme } from "../pages/theme"

export default function Button({ label, iconAfterButton, className, version="normal", onClick }) {
  return (
    
    <ButtonStyled className={className} version={version} onClick={onClick}>
    
        <span>{ label }</span>
        <div className="icon">{iconAfterButton && iconAfterButton}</div>
        
    </ButtonStyled>

  )
}

// Un style propre à cet Input.
const ButtonStyled = styled.button`

    // Notion de Dictionnaire via props destructurées.
    ${({ version }) => extraStyle[version]}
`

const extraStylePrimary = css`

    width: 100%;
    display: inline-flex;
    justify-content : center;
    align-items: center;
    position: relative;     // in case we create interactive elements
    white-space: nowrap;    // Prevent the text label from wrapping
    text-decoration: none;  // Remove the text decoration
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.heavy};
    color: ${theme.colors.white};
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;
  
      &:hover:not(:disabled) {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.background_white};
        border: 1px solid ${theme.colors.primary};
        transition: all 200ms ease-out;
      }

      &:active {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
      }

      &:disabled {
        opacity: 50%;
        cursor: not-allowed;
        z-index: 2;
      }

      &.is-disabled {
        opacity: 50%;
        cursor: not-allowed;
        z-index: 2;
      }

      &.with-focus {
        border: 1px solid white;
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        :hover {
          color: ${theme.colors.white};
          background-color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.white};
        }
        :active {
          background-color: ${theme.colors.white};
          color: ${theme.colors.primary};
        }
      }

      .icon {
        display: flex;
        justify-content : center;
        align-items: center;
        font-size: ${theme.fonts.SM};
      }

`

const extraStyleSuccess = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 100%;
  padding: 0 1.5em;
  font-weight: ${theme.fonts.weights.semiBold};

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }

  &:active {
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`

const extraStyle = {
  normal: extraStylePrimary,
  success: extraStyleSuccess,
}