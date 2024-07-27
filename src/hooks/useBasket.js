import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, findObjectById, findIndexById } from "../utils/array";
import { setLocalStorage } from "../utils/window";

export const useBasket = () => {

    const [basket, setBasket] = useState(fakeBasket.EMPTY);
    
    // State Handlers
    const handleAddBasket = (idProductToAdd, username) => { 
        
        // 1. [...menu] pas de shallow copy, que en surface
        const basketCopy = deepClone(basket);
        const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy);

        if(productAlreadyInBasket) {
            incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username);
            return
        }

        createNewProductInBasket(idProductToAdd, basketCopy, setBasket, username);
    }

    const createNewProductInBasket = (idProductToAdd, someBasket, setBasket, username) => {
        // Just adding extra info into basket from the menu product.
        // 2. manip de la copie du tableau
        const newBasketProduct = {
            id: idProductToAdd,
            quantity: 1,
        }
        const newBasket = [newBasketProduct, ...someBasket];

        // 3. update du statut  
        setBasket(newBasket);
        setLocalStorage(username, newBasket);
    }
    
    const incrementProductAlreadyInBasket = (idProductToAdd, someBasket, username) => {
        const indexOfProduct = findIndexById(idProductToAdd, someBasket);
        someBasket[indexOfProduct].quantity += 1;
        setBasket(someBasket); // 3. update du statut
        setLocalStorage(username, someBasket);
    }

    const handleEditBasket = (productBeingEdited) => { 
        // 1. copy du menu (deep clone)
        const basketCopy = deepClone(basket);

        // 2. manip de la copie du tableau
        const indexOfBasketToUpdate = findIndexById(productBeingEdited.id, basket);
        basketCopy[indexOfBasketToUpdate] = productBeingEdited;

        // 3. update du statut
        setBasket(basketCopy);
        //setLocalStorage(username, basketCopy);
     }

    const handleDeleteBasket = (idOfDeleteProduct) => { 
        // 1. [...menu] pas de shallow copy, que en surface
        const basketCopy = [...basket];

        // 2. manip de la copie du tableau
        const basketUpdated = basketCopy.filter((product) => product.id !== idOfDeleteProduct);

        // 3. update du statut
        setBasket(basketUpdated);
    }

    return {basket, handleAddBasket, handleEditBasket, handleDeleteBasket}
}