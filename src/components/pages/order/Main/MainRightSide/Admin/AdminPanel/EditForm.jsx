import OrderContext from "../../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import { useContext } from "react";
import Form from "./Form";

export default function EditForm() {

  const { 
      productSelected, 
      setProductSelected, 
      handleEditMenu,
      handleEditBasket,
      titleEditRef } = useContext(OrderContext);

  // Event Handler (ou gestionnaire d'événements)
  const handleChange = (event) => { 
    const {name, value} = event.target;
    const produitEnMAJ = {
      ...productSelected,
      [name]: value
    };

    // console.log("productSelected :", productSelected);

    setProductSelected(produitEnMAJ); // update le formulaire
    handleEditMenu(produitEnMAJ); // update le menu
    // handleEditBasket(produitEnMAJ); // update le panier
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