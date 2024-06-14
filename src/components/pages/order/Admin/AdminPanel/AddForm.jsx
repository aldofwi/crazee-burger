import { useContext, useState } from "react";
import styled from "styled-components"
import OrderContext from '/src/context/OrderContext';

export default function AddForm() {

  const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
  };

  const { handleAdd } = useContext(OrderContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const handleSubmit = (event) => { 
    event.preventDefault(); // No Reload

      const newProduitToAdd = {
        ...newProduct,
        id: crypto.randomUUID(),
      }
    handleAdd(newProduitToAdd);
  }

  const handleChange = (event) => { 
    const name = event.target.name;
    const newValue = event.target.value;

    setNewProduct({ ...newProduct, [name]: newValue });
  }

  return (

    <AddFormStyled onSubmit={handleSubmit}>
    
      <div className="image-preview">
        {
          newProduct.imageSource ?
        <img src={newProduct.imageSource} alt={newProduct.title} />
                :
        <div>Aucune Image</div>
        }
      </div>

      <div className="input-fields">
        <input
          name="title" 
          type="text" 
          value={newProduct.title} 
          onChange={handleChange}
          placeholder="Nom" />
        <input
          name="imageSource" 
          type="text" 
          value={newProduct.imageSource} 
          onChange={handleChange}
          placeholder="Image URL" />
        <input
          name="price" 
          type="text" 
          value={newProduct.price ? newProduct.price : ""} 
          onChange={handleChange}
          placeholder="Price" />
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
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
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