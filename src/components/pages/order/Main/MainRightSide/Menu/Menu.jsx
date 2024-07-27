import { useContext } from 'react';
import styled from 'styled-components';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import { formatPrice } from '/src/utils/maths';
import EmptyMenuClient from './EmptyMenuClient';
import { theme } from '../../../../../../theme';
import { checkIfProductIsClicked } from './helper';
import { findObjectById, isEmpty } from '../../../../../../utils/array';
import OrderContext from '../../../../../../context/OrderContext';
import ProductCard from '../../../../../reusable-ui/ProductCard';
import { DEFAULT_IMAGE, DEFAULT_TITLE, EMPTY_PRODUCT } from '../../../../../../enums/product';
import Loader from './Loader';

export default function Menu() {

    // States
    const { menu,
            resetMenu,
            isModeAdmin,
            handleDeleteMenu,
            handleAddBasket,
            handleDeleteBasket,
            username,
            titleEditRef, 
            setIsCollapsed,
            productSelected,
            setProductSelected,
            setCurrentTabSelected } = useContext(OrderContext);

    // Comportements
    const handleClick = async (idProductClicked) => { 
        if(!isModeAdmin) return; // attendre le comp soit créé pr fr focus.

        const productClickedOn = findObjectById(idProductClicked, menu);
        await setIsCollapsed(false);
        await setCurrentTabSelected("edit");
        await setProductSelected(productClickedOn);
        titleEditRef.current.focus();
    }

    const handleAddButton = (event, idProductToAdd) => {
        event.stopPropagation();
        
        handleAddBasket(idProductToAdd, username);
    }

    const handleCardDelete = (event, idProductToDelete) => { 
        event.stopPropagation();

        handleDeleteMenu(idProductToDelete, username);
        handleDeleteBasket(idProductToDelete);
        idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT);
    }

    // Affichage
    if(!menu) return <Loader />

    if(isEmpty(menu)) {
        if(!isModeAdmin) return <EmptyMenuClient />
        return <EmptyMenuAdmin onReset={() => resetMenu(username)} />
    }

  return (

    <MenuStyled>

        {menu.map(({id, imageSource, title, price}) => {
            return (
                <ProductCard
                    key={id}
                    title={title ? title : DEFAULT_TITLE}
                    imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
                    leftDescription={formatPrice(price)}
                    hasDeleteButton={isModeAdmin}
                    onDelete={(event) => handleCardDelete(event, id)}
                    onAdd={(event) => handleAddButton(event, id)}
                    onClick={() => handleClick(id)}
                    isHoverable={isModeAdmin}
                    isSelected={checkIfProductIsClicked(id, productSelected.id)}
                />

            )
        })}
    
    </MenuStyled>
  )
}
// <ProductCard {...item} />

const MenuStyled = styled.div`

    display: grid;
    grid-row-gap: 60px;

    background: ${theme.colors.background_white};
    grid-template-columns: repeat(3, 1fr);

    box-shadow: ${theme.shadows.strong};

    padding: 50px 50px 150px;
    justify-items: center;
    overflow-y: scroll;
`

    // grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    // grid-template-columns: repeat(4, 1fr);
    // border: 1px solid green;
