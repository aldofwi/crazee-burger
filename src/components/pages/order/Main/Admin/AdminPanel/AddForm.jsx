import { useContext, useState } from "react";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";
import OrderContext from '/src/context/OrderContext';
import Button from "../../../../../reusable-ui/Button";
import { getInputTextsConfig } from "./inputTextConfig";
import TextInput from "../../../../../reusable-ui/TextInput";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

export default function AddForm() {

  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => { 
    event.preventDefault(); // No Reload

      const newProduitToAdd = {
        ...newProduct,
        id: crypto.randomUUID(),
      }
    handleAdd(newProduitToAdd);
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMsg();
  }

  const handleChange = (event) => { 
    const name = event.target.name;
    const newValue = event.target.value;

    setNewProduct({ ...newProduct, [name]: newValue });
  }

  const displaySuccessMsg = () => { 
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  }

  const inputTexts = getInputTextsConfig(newProduct);

  return (

    <AddFormStyled onSubmit={handleSubmit}>
    
      <ImagePreview newProduct={newProduct} />

      <div className="input-fields">
        { inputTexts.map(input => 
          <TextInput
              key={input.id}
              {...input} // Déstructuration de nos inputs.
              onChange={handleChange}
              version="minimalist"
          />) }
      </div>
      
      <div className="submit">  
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </div>

    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`

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

  .submit {
    grid-area: 4 / 2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .submit-button {
      // width: 50%;
      height: 100%;
    } 
  }
`

/*
// Display GRID :

1. Préciser le nb de colonnes 
2. Préciser le nb de lignes
3. Positionner les élements 
*/