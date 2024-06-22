import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextConfig";
import TextInput from "../../../../../../reusable-ui/TextInput";
import React from "react";

const Form = React.forwardRef(({ product, onSubmit, onChange, children }, ref) => {

  const inputTexts = getInputTextsConfig(product);

  return (
    <FormStyled onSubmit={onSubmit}>
    
      <ImagePreview newProduct={product} />

      <div className="input-fields">
        { inputTexts.map(input => 
          <TextInput
              key={input.id}
              {...input} // Déstructuration de nos inputs.
              onChange={onChange}
              version="minimalist"
              ref={ref && input.name === "title" ? ref : null}
          />) }
      </div>

      <div className="form-footer">{children}</div>

    </FormStyled>
  )
}
)

export default Form

const FormStyled = styled.form`

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr); // 1fr 1fr 1fr 1fr
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
    grid-row-gap: 8px;
  }

  .form-footer {
    grid-area: 4 / 2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`

/*
// Display GRID :

1. Préciser le nb de colonnes 
2. Préciser le nb de lignes
3. Positionner les élements 
*/