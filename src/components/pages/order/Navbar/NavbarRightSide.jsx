import ToggleButton from "../../../reusable-ui/ToggleButton"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import styled from "styled-components"
import Profile from "./Profile"
import { useState } from "react";
import ToastAdmin from "./ToastAdmin";

export default function NavbarRightSide({ username }) {

  const [isChecked, setIsChecked] = useState(false);

  const showToastMessage = () => { 
    //setIsChecked((prev) => !prev);

    if(!isChecked) {

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

    setIsChecked(!isChecked);
   }

  return (

    <NavbarRightSideStyled>
        
        <ToggleButton
          defaultChecked={false}
          onToggle={showToastMessage}
          labelIfChecked={"Désactiver le mode admin"}
          labelIfUnchecked={"Activer le mode admin"}
        />
        <ToastAdmin />
        
        <Profile username={username} />

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