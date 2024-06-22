import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";

export default function EditForm() {

  const { 
      productSelected, 
      setProductSelected, 
      handleEdit, 
      titleEditRef } = useContext(OrderContext);

  // Event Handler (ou gestionnaire d'événements)
  const handleChange = (event) => { 
    const {name, value} = event.target;
    const produitEnMAJ = {
      ...productSelected,
      [name]: value,
    };

    setProductSelected(produitEnMAJ); // update le formulaire
    handleEdit(produitEnMAJ); // update le menu
  }

  return (
        <Form 
          product={productSelected} 
          onChange={handleChange} 
          ref={titleEditRef}>

            <EditInfoMessage />
        </Form>
  )
}