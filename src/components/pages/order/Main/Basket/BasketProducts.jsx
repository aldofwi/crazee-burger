import { DEFAULT_IMAGE } from "../../../../../enums/product"
import styled from "styled-components"
import BasketCard from "./BasketCard"

export default function BasketProducts({ basket }) {


  return (

    <BasketProductsStyle>
        {basket.map((basketProduct) => (

            <div className="basket-card" key={basketProduct.id}>
                <BasketCard 
                    {...basketProduct}
                    imageSource={basketProduct.imageSource ? basketProduct.imageSource : DEFAULT_IMAGE}    
                />
            </div>

        ))}
    </BasketProductsStyle>

  )
}

const BasketProductsStyle = styled.div`

    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    .basket-card {
        height: 86px;
        margin: 10px 16px;
        box-sizing: border-box;

        :first-child {
            margin-top: 20px;
        }

        :last-child {
            margin-bottom: 20px;
        }
    }
`

