import { useContext, useState } from "react";
import OrderContext from '/src/context/OrderContext';
import styled from "styled-components"
import { theme } from '../../../theme'
import { FiCheck } from "react-icons/fi"
import { FaHamburger } from "react-icons/fa"
import { MdOutlineEuro } from "react-icons/md"
import { BsFillCameraFill } from "react-icons/bs"
import TextInput from "../../../../reusable-ui/TextInput";

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
        <div className="empty-image">Aucune Image</div>
        }
      </div>

      <div className="input-fields">
        <TextInput
          name="title" 
          type="text" 
          value={newProduct.title} 
          onChange={handleChange}
          placeholder="Nom du produit (ex: Super Burger)"
          iconBeforeInput={<FaHamburger />}
          version="minimalist"
        />
        <TextInput
          name="imageSource" 
          type="text" 
          value={newProduct.imageSource} 
          onChange={handleChange}
          placeholder="Lien d'URL d'une image"
          iconBeforeInput={<BsFillCameraFill />}
          version="minimalist"
        />
        <TextInput
          name="price" 
          type="text" 
          value={newProduct.price ? newProduct.price : ""} 
          onChange={handleChange}
          placeholder="Prix du produit"
          iconBeforeInput={<MdOutlineEuro />}
          version="minimalist"
        />
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

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr); // 1fr 1fr 1fr 1fr
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .image-preview {
    
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

    .empty-image {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greySemiDark};
      border-radius: ${theme.borderRadius.round};
    }
  }

  .input-fields {
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
    grid-row-gap: 8px;
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