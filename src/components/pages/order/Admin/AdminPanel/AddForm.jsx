import { useContext } from "react";
import styled from "styled-components"
import OrderContext from '/src/context/OrderContext';

export default function AddForm() {

  const { handleAdd } = useContext(OrderContext);

  const newProduit = {
    id: new Date().getTime(),
    title: "Nouveau Produit",
    imageSource: "/public/images/coming-soon.png",
    price: 2.5,
  }

  const handleSubmit = (event) => { 
    event.preventDefault(); // No Reload
    handleAdd(newProduit);
   }

  return (

    <AddFormStyled onSubmit={handleSubmit}>
    
      <div className="image-preview">Image Preview</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Image URL" />
        <input type="text" placeholder="Price" />
      </div>
      <button className="submit-button">Submit Button</button>
    

    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`

  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr); // 1fr 1fr 1fr 1fr
  height: 100%;
  width: 70%;

  .image-preview {
    background: red;
    grid-area: 1 / 1 / 4 / 2;
  }

  .input-fields {
    background: blue;
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
  }

  .submit-button {
    background: green;
    grid-area: 4 / 2 / -1 / -1;
    width: 50%;
    
  }


`

/*
// Display GRID :

1. Préciser le nb de colonnes 
2. Préciser le nb de lignes
3. Positionner les élements 
*/