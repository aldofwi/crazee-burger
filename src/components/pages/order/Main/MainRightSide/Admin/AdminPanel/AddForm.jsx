import Form from "./Form";
import { useContext } from "react";
import SubmitButton from "./SubmitButton";
import OrderContext from '/src/context/OrderContext';
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";
import { useSuccessMsg } from "../../../../../../../hooks/useDisplaySuccessMsg";

export default function AddForm() {

  const { handleAddMenu, newProduct, setNewProduct } = useContext(OrderContext);
  const {isSubmitted, displaySuccessMsg} = useSuccessMsg(3000); // Custom Hook

  const handleSubmit = (event) => { 
    event.preventDefault(); // No Reload

      const newProduitToAdd = {
        ...newProduct,
        id: crypto.randomUUID(),
      }
    handleAddMenu(newProduitToAdd);
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMsg();
  }

  const handleChange = (event) => { 
    const name = event.target.name;
    const newValue = event.target.value;

    setNewProduct({ ...newProduct, [name]: newValue });
  }

  return (
    <Form 
        product={newProduct} 
        onSubmit={handleSubmit} 
        onChange={handleChange}>
        
        <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  )
}
