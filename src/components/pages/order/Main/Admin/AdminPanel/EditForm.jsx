import OrderContext from "../../../../../../context/OrderContext"
import { useContext } from "react"
import styled from "styled-components"
import HintMessage from "./HintMessage"

export default function EditForm() {

  const { productSelected } = useContext(OrderContext);

  return (
    <EditFormStyled>

      <HintMessage />
      <span>{productSelected.title}</span>

    </EditFormStyled>
  )
}

const EditFormStyled = styled.form`

  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;

`