import styled from "styled-components"

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
    border: 1px solid red;
    display: inline-flex;
    justify-content : center;
    align-items: center;
    position: relative;     // in case we create interactive elements
    white-space: nowrap;    // Prevent the text label from wrapping
    text-decoration: none;  // Remove the text decoration
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;
  
      &:hover:not(:disabled) {
        background-color: white;
        color: #ff9f1b;
        border: 1px solid #ff9f1b;
        transition: all 200ms ease-out;
      }

      &:active {
        color: white;
        background-color: #ff9f1b;
        border: 1px solid #ff9f1b;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

`
