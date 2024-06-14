import { useContext, useState } from "react";
import styled from "styled-components"
import OrderContext from '/src/context/OrderContext';
import { FiCheck } from "react-icons/fi"

export default function AddForm() {

  const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
  };

  const { handleAdd } = useContext(OrderContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
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
          placeholder="Nom du produit (ex: Super Burger)" />
        <input
          name="imageSource" 
          type="text" 
          value={newProduct.imageSource} 
          onChange={handleChange}
          placeholder="Lien d'URL d'une image" />
        <input
          name="price" 
          type="text" 
          value={newProduct.price ? newProduct.price : ""} 
          onChange={handleChange}
          placeholder="Prix du produit" />
      </div>
      <div className="submit">
        <button className="submit-button">Ajouter un produit</button>
        
        {isSubmitted && 
          <div className="submit-message">
          <FiCheck />
            <span>Ajouté avec succès !</span>
          </div>
        }
      </div>
    

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

  .submit {
    background: green;
    grid-area: 4 / 2 / -1 / -1;
    display: flex;
    align-items: center;

    .submit-button {
      width: 50%;
    } 

    .submit-message {
      border: 1px solid red;
    }
  }


`

/*
// Display GRID :

1. Préciser le nb de colonnes 
2. Préciser le nb de lignes
3. Positionner les élements 
*/