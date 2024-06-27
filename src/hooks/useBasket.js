import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, findInArray, findIndex } from "../utils/array";

export const useBasket = () => {

    const [basket, setBasket] = useState(fakeBasket.EMPTY);

    // State Handlers
    const handleAddBasket = (newProduct) => { 
        
        const basketCopy = deepClone(basket); // 1. [...menu] pas de shallow copy, que en surface
        const isProductAlreadyInBasket = findInArray(newProduct.id, basketCopy) !== undefined;
        
        // 1er cas : Le produit n'est pas dans le Basket.
        if(!isProductAlreadyInBasket) {  // 2. manip de la copie du tableau
            createNewProductInBasket(newProduct, basketCopy, setBasket); // 3. update du statut
            return;
        }

        // 2e cas : Le produit est DEJA dans le basket.
        incrementProductAlreadyInBasket(newProduct, basketCopy); 
    }

    const createNewProductInBasket = (product, someBasket, setBasket) => {
        const newBasketProduct = {
            ...product,
            quantity: 1,
        };
        const basketUpdated = [newBasketProduct, ...someBasket];
        setBasket(basketUpdated);
    }
    
    const incrementProductAlreadyInBasket = (product, someBasket) => {
        const indexOfProduct = findIndex(product.id, someBasket);
        someBasket[indexOfProduct].quantity += 1;
        setBasket(someBasket); // 3. update du statut
    }

    const handleDeleteBasket = (idOfDeleteProduct) => { 
        // 1. [...menu] pas de shallow copy, que en surface
        const basketCopy = [...basket];

        // 2. manip de la copie du tableau
        const basketUpdated = basketCopy.filter((product) => product.id !== idOfDeleteProduct);

        // 3. update du statut
        setBasket(basketUpdated);
    }

    return {basket, handleAddBasket, handleDeleteBasket}
}