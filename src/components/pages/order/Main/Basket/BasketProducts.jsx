import { checkIfProductIsClicked } from "../MainRightSide/Menu/helper";
import OrderContext from "../../../../../context/OrderContext";
import { DEFAULT_IMAGE } from "../../../../../enums/product";
import { findObjectById } from "../../../../../utils/array";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { useContext } from "react";

export default function BasketProducts() {

    const { menu, 
            basket, 
            username,
            isModeAdmin, 
            titleEditRef, 
            setIsCollapsed, 
            productSelected,
            setProductSelected, 
            setCurrentTabSelected, 
            handleDeleteBasket } = useContext(OrderContext);

    const handleClick = async (idBasketProductClicked) => { 
        if(!isModeAdmin) return; // attendre le comp soit créé pr fr focus.

        await setIsCollapsed(false);
        await setCurrentTabSelected("edit");
        const basketProductClickedOn = findObjectById(idBasketProductClicked, menu);
        await setProductSelected(basketProductClickedOn);
        titleEditRef.current.focus();
     }

    const handleOnDelete = (event, id) => {
        event.stopPropagation();
        handleDeleteBasket(username, id);
    }

  return (

    <BasketProductsStyle>
        {basket.map((basketProduct) => {
            const menuProduct = findObjectById(basketProduct.id, menu);

            return(

            <div className="basket-card" key={basketProduct.id}>
                <BasketCard
                    {...menuProduct}
                    imageSource={menuProduct.imageSource ? menuProduct.imageSource : DEFAULT_IMAGE}
                    quantity={basketProduct.quantity}
                    isClickable={isModeAdmin}
                    isHoverable={isModeAdmin}
                    isSelected={checkIfProductIsClicked(menuProduct.id, productSelected.id)}
                    onClick={() => handleClick(menuProduct.id)}
                    onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                />
            </div>

            )
        })}
    </BasketProductsStyle>

  )
}

const BasketProductsStyle = styled.div`

    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    .basket-card {
        height: 86px;
        margin: 10px 16px;
        box-sizing: border-box;

        :first-child {
            margin-top: 20px;
        }

        :last-child {
            margin-bottom: 20px;
        }
    }
`

