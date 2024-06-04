import React, { useState } from 'react'
import styled from 'styled-components'
import { fakeMenu2 } from '../../../../fakeData/fakeMenu'
import { formatPrice } from '../../../../utils/maths';
import { theme } from '../../theme';
import ProductCard from '../ProductCard';

export default function Menu() {

    const [menu, setMenu] = useState(fakeMenu2);

  return (

    <MenuStyled>

        {menu.map((item) => {
            return (
                <ProductCard className="produit"
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

    background: ${theme.colors.background_white};
    display: grid;
    grid-row-gap: 60px;
    grid-template-columns: repeat(4, 1fr);
    padding: 50px 50px 150px;
    justify-items: center;

    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

    .produit {
        background: red;
        width: 240px;
        height: 330px;

        .image {
            border: 1px solid fuchsia;
            width: 100px;
            height: auto;
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        
        .description {
            border: 1px solid fuchsia;
        }
    }

`