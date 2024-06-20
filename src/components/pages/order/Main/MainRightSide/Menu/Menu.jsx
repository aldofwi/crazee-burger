import styled from 'styled-components';
import { theme } from '../../../../theme';
import { useContext } from 'react';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import { formatPrice } from '/src/utils/maths';
import EmptyMenuClient from './EmptyMenuClient';
import OrderContext from '/src/context/OrderContext';
import ProductCard from '../../../../../reusable-ui/ProductCard';

const DEFAULT_TITLE = "NEW PRODUCT";
const DEFAULT_IMAGE = "/public/images/coming-soon.png";

export default function Menu() {

    // States
    const { menu, handleDelete, resetMenu, isModeAdmin, setProductSelected } = useContext(OrderContext);

    // Comportements

    // Affichage
    if(menu.length === 0) {
        if(!isModeAdmin) return <EmptyMenuClient />
        return <EmptyMenuAdmin onReset={resetMenu} />
    }

    const handleClick = (idProductClicked) => { 
        
        console.log("idProductClicked : ", idProductClicked);
        const productSelected = menu.find((product) => product.id === idProductClicked);
        console.log("productSelected : ", productSelected);
        setProductSelected(productSelected);
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
                    version={isModeAdmin ? "admin" : "client"}
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
