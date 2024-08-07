import { useState } from "react";
import { syncBothMenus } from "../api/product";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, findIndexById } from "../utils/array";

export const useMenu = () => {

    const [menu, setMenu] = useState(); 

    // State Handlers (ou Gestionnaires de states)
    const handleAddMenu = (newProduct, username) => { 
        // 1. [...menu] pas de shallow copy, que en surface
        const menuCopy = deepClone(menu);
  
        // 2. manip de la copie du tableau
        const menuUpdated = [newProduct, ...menuCopy];
  
        // 3. update du statut
        setMenu(menuUpdated);
        syncBothMenus(username, menuUpdated);
    }
  
    const handleEditMenu = (productBeingEdited, username) => {
      // 1. copy du menu (deep clone)
      const menuCopy = deepClone(menu);
      
      // 2. manip de la copie du tableau
      const indexOfMenuToUpdate = findIndexById(productBeingEdited.id, menu);
      menuCopy[indexOfMenuToUpdate] = productBeingEdited;
      
      // 3. update du statut
      setMenu(menuCopy);
      syncBothMenus(username, menuCopy);
    }
  
    const handleDeleteMenu = (idOfDeleteProduct, username) => { 
      // 1. copy du menu
      const menuCopy = [...menu];
  
      // 2. manip de la copie du tableau
      const menuUpdated = menuCopy.filter((product) => product.id !== idOfDeleteProduct);
  
      // 3. update du statut
      setMenu(menuUpdated);
      syncBothMenus(username, menuUpdated);
    }
  
    const resetMenu = (username) => { 
      setMenu(fakeMenu.SMALL);
      syncBothMenus(username, fakeMenu.SMALL);
    }

    return {menu, setMenu, handleAddMenu, handleEditMenu, handleDeleteMenu, resetMenu}
}
