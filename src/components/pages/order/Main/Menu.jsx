import React, { useState } from 'react'
import styled from 'styled-components'
import { fakeMenu2 } from '../../../../fakeData/fakeMenu'
import { formatPrice } from '../../../../utils/maths';
import ProductCard from '../ProductCard';

export default function Menu() {

    const [menu, setMenu] = useState(fakeMenu2);

  return (

    <MenuStyled className="menu">

        {menu.map((item) => {
            return (
                <div class="produit">{item.title}</div>
            )
        })}
    
    </MenuStyled>

  )
}

const MenuStyled = styled.div`

    background: purple;
    display: grid;
    grid-row-gap: 60px;
    grid-template-columns: repeat(4, 1fr);
    padding: 50px 50px 150px;
    justify-items: center;

    .produit {
        background: red;
        width: 240px;
        height: 330px;
    }

`

/*

<ProductCard className="produit"
    image={item.imageSource}
    titre={item.title}
    prix={formatPrice(item.price)}
/>

*/