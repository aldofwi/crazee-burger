import React, { useState } from 'react'
import styled from 'styled-components'
import { fakeMenu2 } from '../../../../fakeData/fakeMenu'
import { formatPrice } from '../../../../utils/maths';
import ProductCard from '../ProductCard';

export default function Menu() {

    const [menu, setMenu] = useState(fakeMenu2);

  return (

    <MenuStyled className="menu">

        Menu

        {menu.map((item, i) => {
            return (
                <ProductCard
                    image={item.imageSource}
                    titre={item.title}
                    prix={formatPrice(item.price)}
                />
            )
        })}
    
    </MenuStyled>

  )
}

const MenuStyled = styled.div`

    background: purple;
    padding: 50px 50px 150px;
    grid-row-gap: 60px;

`

/*



*/