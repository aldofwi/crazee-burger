import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, findInArray } from "../utils/array";

export const useBasket = () => {

    const [basket, setBasket] = useState(fakeBasket.SMALL);

    // State Handlers
    const handleAddBasket = (newProduct) => { 
        // 1. [...menu] pas de shallow copy, que en surface
        const basketCopy = deepClone(basket);

        const isProductAlreadyInBasket = findInArray(newProduct.id, basketCopy) !== undefined;
        // console.log("isProductAlreadyInBasket :", isProductAlreadyInBasket);

        // 2. manip de la copie du tableau

        // 1er cas : Le produit n'est pas dans le Basket.
        if(!isProductAlreadyInBasket) {
            const newBasketProduct = {
                ...newProduct,
                quantity: 1,
            }
         
            const basketUpdated = [newBasketProduct, ...basketCopy];
            // 3. update du statut
            setBasket(basketUpdated);
            return; 
        }

        const indexOfProduct = basket.findIndex(
        (basketProduct) => basketProduct.id === newProduct.id);

        // console.log("indexOfProduct :", indexOfProduct);
        // 2e cas : Le produit est DEJA dans le basket.

        basketCopy[indexOfProduct].quantity += 1;
        // 3. update du statut
        setBasket(basketCopy);
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