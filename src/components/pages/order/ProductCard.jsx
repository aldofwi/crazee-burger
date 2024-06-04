import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '../../reusable-ui/PrimaryButton'
import { theme } from '../theme'

export default function ProductCard({ image, titre, prix }) {

  return (

    <ProductCardStyled>
    
      <div className="image">
        <img src={image} alt="produit" />
      </div>

      <div className="info-text">
        <div className="description">

          <div class="titre-produit">{titre}</div>
          <div class="prix-produit">{prix}</div>
            <PrimaryButton label="Ajouter" className="bouton-ajouter" />
          
        </div>
      </div>

    </ProductCardStyled>

  )
}

/*
              <div className="produit">
                
                    <div className="image">
                        <img src={item.imageSource} alt={item.title} />
                    </div>

                    <div className="info-text">
                        <div className="description">

                            <div className="title">{item.title}</div>
                            <div className="price">{item.price}</div>
                            <button className="add-button">Ajouter</button>

                        </div>
                    </div>
                    
                </div>
*/

const ProductCardStyled = styled.div`

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

/* 
    display: grid;
    align-items: center;
    justify-content: center;
    height: 330px;
    width: 240px;
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius.extraRound};
    margin-bottom: 20px;
    padding: 20px 20px 20px;


    img {
      object-position: center;
      height: 145px;
      width: 200px;
    }

    .titre-produit {
      display: flex;
      align-items: center;
      font-family: "Amatic SC";
      font-size: ${theme.fonts.P4};
      font-weight: ${theme.weights.bold};
      text-transform: uppercase;
    }

    .prix-produit {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.P1};
    }

    .bouton-ajouter {
      width: 60%;
    } 
*/

`
