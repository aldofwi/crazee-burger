import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, findIndexById } from "../utils/array";

export const useMenu = () => {

    const [menu, setMenu] = useState(fakeMenu.MEDIUM); 

    // State Handlers (ou Gestionnaires de states)
    const handleAddMenu = (newProduct) => { 
        // 1. [...menu] pas de shallow copy, que en surface
        const menuCopy = deepClone(menu);
  
        // 2. manip de la copie du tableau
        const menuUpdated = [newProduct, ...menuCopy];
  
        // 3. update du statut
        setMenu(menuUpdated);
    }
  
    const handleEditMenu = (productBeingEdited) => {
      // 1. copy du menu (deep clone)
      const menuCopy = deepClone(menu);
      
      // 2. manip de la copie du tableau
      const indexOfMenuToUpdate = findIndexById(productBeingEdited.id, menu);
      menuCopy[indexOfMenuToUpdate] = productBeingEdited;
      
      // 3. update du statut
      setMenu(menuCopy);
    }
  
    const handleDeleteMenu = (idOfDeleteProduct) => { 
      // 1. copy du menu
      const menuCopy = [...menu];
  
      // 2. manip de la copie du tableau
      const menuUpdated = menuCopy.filter((product) => product.id !== idOfDeleteProduct);
  
      // 3. update du statut
      setMenu(menuUpdated);
    }
  
    const resetMenu = () => { 
      setMenu(fakeMenu.MEDIUM);
    }

    return {menu, handleAddMenu, handleEditMenu, handleDeleteMenu, resetMenu}
}
