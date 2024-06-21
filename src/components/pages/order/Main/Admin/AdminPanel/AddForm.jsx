import { useContext, useState } from "react";
import Form from "./Form";
import OrderContext from '/src/context/OrderContext';
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

  return (
    <Form 
        product={newProduct} 
        onSubmit={handleSubmit} 
        onChange={handleChange} 
        isSubmitted={isSubmitted}
    />
  )
}