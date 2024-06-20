import { useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../../../../theme';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import { formatPrice } from '/src/utils/maths';
import EmptyMenuClient from './EmptyMenuClient';
import { checkIfProductIsClicked } from './helper';
import OrderContext from '/src/context/OrderContext';
import ProductCard from '../../../../../reusable-ui/ProductCard';
import { DEFAULT_IMAGE, DEFAULT_TITLE } from '../../../../../../enums/product';

export default function Menu() {

    // States
    const { menu,
            resetMenu, 
            isModeAdmin,
            handleDelete,
            productSelected,
            setProductSelected } = useContext(OrderContext);

    // Comportements
    const handleClick = (idProductClicked) => { 
        const productClickedOn = menu.find((product) => product.id === idProductClicked);
        setProductSelected(productClickedOn);
    }

    // Affichage
    if(menu.length === 0) {
        if(!isModeAdmin) return <EmptyMenuClient />
        return <EmptyMenuAdmin onReset={resetMenu} />
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
                    onDelete={() => handleDelete(id)}
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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    box-shadow: ${theme.shadows.medium};

    padding: 50px 50px 150px;
    justify-items: center;
    overflow-y: scroll;
`

    // grid-template-columns: repeat(4, 1fr);
    // border: 1px solid green;
