import React, { useState } from 'react'
import styled from 'styled-components'
import { fakeMenu1, fakeMenu2 } from '../../../../fakeData/fakeMenu'
import ProductCard from '../../../reusable-ui/ProductCard';
import { formatPrice } from '../../../../utils/maths';
import { theme } from '../../theme';

export default function Menu() {

    const [menu, setMenu] = useState(fakeMenu2);

  return (

    <MenuStyled>

        {menu.map(({id, imageSource, title, price}) => {
            return (
                <ProductCard
                    key={id}
                    title={title}
                    imageSource={imageSource}
                    leftDescription={formatPrice(price)}
                />

            )
        })}
    
    </MenuStyled>

  )
}

// <ProductCard {...item} />

const MenuStyled = styled.div`

    // border: 1px solid green;
    background: ${theme.colors.background_white};
    display: grid;
    grid-row-gap: 60px;
    // grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 50px 50px 150px;
    justify-items: center;

    box-shadow: ${theme.shadows.medium};
    overflow-y: scroll;

`