import { useState } from "react";
import { deepClone } from "../utils/array";
import { fakeMenu } from "../fakeData/fakeMenu";

export const useMenu = () => {

    const [menu, setMenu] = useState(fakeMenu.SMALL); // Custom Hook

    // State Handler (ou Gestionnaire de states)
    const handleAdd = (newProduct) => { 
        // 1. [...menu] pas de shallow copy, que en surface
        const menuCopy = deepClone(menu);
  
        // 2. manip de la copie du tableau
        const menuUpdated = [newProduct, ...menuCopy];
  
        // 3. update du statut
        setMenu(menuUpdated);
    }
  
    const handleEdit = (productBeingEdited) => {
      // 1. copy du menu (deep clone)
      const menuCopy = deepClone(menu);
      
      // 2. manip de la copie du tableau
      const indexOfMenuToUpdated = menu.findIndex((product) => product.id === productBeingEdited.id);
      menuCopy[indexOfMenuToUpdated] = productBeingEdited;
      
      // 3. update du statut
      setMenu(menuCopy);
    }
  
    const handleDelete = (idOfDeleteProduct) => { 
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

    return {menu, setMenu, handleAdd, handleEdit, handleDelete, resetMenu}
}
