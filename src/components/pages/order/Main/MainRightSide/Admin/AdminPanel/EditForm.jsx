import OrderContext from "../../../../../../../context/OrderContext";
import { useSuccessMsg } from "../../../../../../../hooks/useDisplaySuccessMsg";
import EditInfoMessage from "./EditInfoMessage";
import { useContext, useState } from "react";
import Form from "./Form";
import SavingMessage from "./SavingMessage";
export default function EditForm() {

  const { 
      username,
      productSelected, 
      setProductSelected, 
      handleEditMenu,
      handleEditBasket,
      titleEditRef } = useContext(OrderContext);

  const [valueOnFocus, setValueOnFocus] = useState();
  const {isSubmitted : isSaved, displaySuccessMsg} = useSuccessMsg();

  // Event Handler (ou gestionnaire d'événements)
  const handleChange = (event) => { 
    const {name, value} = event.target;
    const produitEnMAJ = {
      ...productSelected,
      [name]: value
    };

    setProductSelected(produitEnMAJ); // update le formulaire
    handleEditMenu(produitEnMAJ, username); // update le menu
  }

  const handleOnFocus = (event) => { 
    const inputValueOnFocus = event.target.value;
    setValueOnFocus(inputValueOnFocus);
  }

  const handleOnBlur = (event) => { 
    const valueOnBlur = event.target.value;
    if(valueOnFocus !== valueOnBlur) displaySuccessMsg();
  }

  return (
        <Form 
          product={productSelected} 
          onChange={handleChange} 
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          ref={titleEditRef}>

            {
              !isSaved ?
              <EditInfoMessage />
                    :
              <SavingMessage />
            }
        </Form>
  )
}