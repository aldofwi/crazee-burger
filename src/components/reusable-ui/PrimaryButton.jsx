import styled from "styled-components"
import { theme } from "../pages/theme"

export default function PrimaryButton({ label, iconAfterButton }) {
  return (
    
    <PrimaryButtonStyled>
        <span>{ label }</span>
        {iconAfterButton && iconAfterButton}
        
    </PrimaryButtonStyled>

  )
}

// Un style propre à cet Input.
const PrimaryButtonStyled = styled.button`

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
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.heavy};
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
  
      &:hover:not(:disabled) {
        background-color: ${theme.colors.background_white};
        color: ${theme.colors.primary_burger};
        border: 1px solid ${theme.colors.primary_burger};
        transition: all 200ms ease-out;
      }

      &:active {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary_burger};
        border: 1px solid ${theme.colors.primary_burger};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

`
