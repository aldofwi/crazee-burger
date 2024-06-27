import styled from "styled-components"
import { theme } from "../../../../../theme"
import { MdDeleteForever } from "react-icons/md"
import { formatPrice } from "../../../../../utils/maths"

export default function BasketCard({
    title,
    price, 
    quantity,
    imageSource,
    className,
    onDelete }) {

  return (

    <BasketCardStyle className={className}>

        <div className="delete-button">
            <MdDeleteForever className="icon" />
        </div>

        <div className="image">
            <img src={imageSource} alt={title} />    
        </div>

        <div className="text-info">
            <div className="left-info">
                <div className="title">
                    <span>{title}</span>
                </div>

                <span className="price">{formatPrice(price)}</span>
            </div>
            
            <div className="quantity">
                <span>x {quantity}</span>
            </div>
        </div>

    </BasketCardStyle>

  )
}

const BasketCardStyle = styled.div`

    //border: 1px solid red;
    box-sizing: border-box;

    height: 86px;
    padding: 8px 16px;

    display: grid;
    grid-template-columns: 30% 1fr;

    border-radius: ${theme.borderRadius.round};
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.cardBasket};

    position: relative;

    .image {
        box-sizing: border-box;
        height: 70px;

        img {
            padding: 5px;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }

    .text-info {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 70% 1fr;
        font-size: ${theme.fonts.size.P0};
        color: ${theme.colors.primary};

        .left-info {
            display: grid;
            grid-template-rows: 60% 40%;
            margin-left: 21px;

            .title {
                display: flex;
                align-items: center;
                font-family: ${theme.fonts.family.stylish};
                font-weight: ${theme.fonts.weights.bold};
                font-size: ${theme.fonts.size.P2};
                color: ${theme.colors.dark};
                line-height: 32px;
                min-width: 0;
                
                span {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
            
            .price {
                /* display: flex;
                justify-content: flex-start;
                align-items: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: ${theme.colors.primary}; */
                font-weight: ${theme.fonts.weights.medium};
                font-size: ${theme.fonts.size.SM};
            }
        }

        .quantity {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            justify-content: flex-end;
            margin-right: 20px;
            font-size: ${theme.fonts.size.SM};
            font-weight: ${theme.fonts.weights.medium};
        }
    }

    .delete-button {
        display: none;
        z-index: 1;
    }

    :hover {
        .delete-button-pokemon {
            bottom: none;
            box-sizing: border-box;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 76px;
            border-top-right-radius: ${theme.borderRadius.round};
            border-bottom-right-radius: ${theme.borderRadius.round};
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${theme.colors.red};
            color: ${theme.colors.white};
            cursor: pointer;
        }

        .icon {
            width: ${theme.fonts.size.P3};
            height: ${theme.fonts.size.P3};
        }

        :hover {
            text-decoration: underline;

            .icon {
                color: ${theme.colors.black};
            }
        }

    }
`