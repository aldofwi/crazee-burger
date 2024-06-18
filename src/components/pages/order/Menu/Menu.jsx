import React, { useState } from 'react'
import styled from 'styled-components'
import ProductCard from '../../../reusable-ui/ProductCard';
import { formatPrice } from '../../../../utils/maths';
import { theme } from '../../theme';
import { useContext } from 'react';
import OrderContext from '/src/context/OrderContext';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import EmptyMenuClient from './EmptyMenuClient';

const DEFAULT_TITLE = "NEW PRODUCT";
const DEFAULT_IMAGE = "/public/images/coming-soon.png";

export default function Menu() {

    // States
    const { menu, handleDelete, resetMenu, isModeAdmin } = useContext(OrderContext);

    // Comportements

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
