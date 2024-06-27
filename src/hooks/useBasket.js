import { useState } from "react";
import { deepClone } from "../utils/array";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = () => {

    const [basket, setBasket] = useState(fakeBasket.LARGE_WEIRD);

    // State Handlers 
    const handleAddBasket = (newProduct) => { 
        // 1. [...menu] pas de shallow copy, que en surface
        const basketCopy = deepClone(basket);

        // 2. manip de la copie du tableau
        const basketUpdated = [newProduct, ...basketCopy];

        // 3. update du statut
        setBasket(basketUpdated);

        console.log("Basket :", basket);
    }

    const handleDeleteBasket = (idOfDeleteProduct) => { 
        // 1. [...menu] pas de shallow copy, que en surface
        const basketCopy = [...basket];

        // 2. manip de la copie du tableau
        const basketUpdated = basketCopy.filter((product) => product.id !== idOfDeleteProduct);

        // 3. update du statut
        setBasket(basketUpdated);
    }

    return {basket, setBasket, handleAddBasket, handleDeleteBasket}
}