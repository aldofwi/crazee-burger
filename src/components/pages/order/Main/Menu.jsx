import React, { useState } from 'react'
import styled from 'styled-components'
import { fakeMenu1, fakeMenu2 } from '../../../../fakeData/fakeMenu'
import { formatPrice } from '../../../../utils/maths';
import { theme } from '../../theme';
import ProductCard from '../../../reusable-ui/ProductCard';

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

    background: ${theme.colors.background_white};
    display: grid;
    grid-row-gap: 60px;
    grid-template-columns: repeat(4, 1fr);
    padding: 50px 50px 150px;
    justify-items: center;

    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

`