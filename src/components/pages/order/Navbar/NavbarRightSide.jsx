import ToggleButton from "../../../reusable-ui/ToggleButton"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import styled from "styled-components"
import Profile from "./Profile"
import ToastAdmin from "./ToastAdmin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function NavbarRightSide() {

  const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext);

  const showToastMessage = () => { 

    if(!isModeAdmin) {

      toast.info("Mode Admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setIsModeAdmin(!isModeAdmin);
    //setIsModeAdmin((prev) => !prev);
   }

  return (

    <NavbarRightSideStyled>
        
        <ToggleButton
          isChecked={isModeAdmin}
          onToggle={showToastMessage}
          labelIfChecked={"Désactiver le mode admin"}
          labelIfUnchecked={"Activer le mode admin"}
        />
        <ToastAdmin />
        
        <Profile />

    </NavbarRightSideStyled>

  )
}

/* 

          className="toaster"
          bodyClassName="body-toast"

      <div className="admin-button">Admin Button</div> 
*/

const NavbarRightSideStyled = styled.nav`

  display: flex;
  align-items: center;

  .admin-button {
    background: lightblue;
  }

  .profile {
    background: yellow;
  }

`