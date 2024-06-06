import ToggleButton from "../../../reusable-ui/ToggleButton"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import styled from "styled-components"
import Profile from "./Profile"
import { theme } from "../../theme";
import { useState } from "react";

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
        <ToastContainer
          className="toaster"
          bodyClassName="body-toast"
        />
        
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

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }

`