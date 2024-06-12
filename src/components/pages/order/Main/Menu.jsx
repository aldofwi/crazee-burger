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
