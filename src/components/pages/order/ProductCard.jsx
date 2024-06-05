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

          <div className="titre-produit">{titre}</div>
          <div className="prix-produit">{prix}</div>
          <div className="add-button">
            <PrimaryButton label="Ajouter" className="bouton-ajouter" />
          </div>
          
        </div>
      </div>

    </ProductCardStyled>

  )
}

const ProductCardStyled = styled.div`

    background: red;
    width: 200px;
    height: 300px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;

    .image {
        border: 1px solid yellow;
        width: 100%;
        height: auto;
        margin-top: 30px;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    
    .description {
        border: 1px solid blue;
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
