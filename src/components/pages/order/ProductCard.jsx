import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '../../reusable-ui/PrimaryButton'
import { theme } from '../theme'

export default function ProductCard({ image, titre, prix }) {

  return (

    <ProductCardStyled>
    
        <img src={image} alt="produit" />

        <div class="titre-produit">{titre}</div>

        <div class="prix-produit">{prix}
          <PrimaryButton label="Ajouter" className="bouton-ajouter" />
        </div>

    </ProductCardStyled>

  )
}

const ProductCardStyled = styled.div`

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

`
