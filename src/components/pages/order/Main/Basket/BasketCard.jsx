import styled, { css } from "styled-components"
import { theme } from "../../../../../theme"
import { MdDeleteForever } from "react-icons/md"
import { formatPrice } from "../../../../../utils/maths"

export default function BasketCard({
    title,
    price, 
    quantity,
    imageSource,
    isClickable,
    isHoverable,
    isSelected,
    className,
    onDelete,
    onClick }) {

  return (

    <BasketCardStyle 
        onClick={onClick} 
        className={className} 
        isSelected={isSelected} 
        isHoverable={isHoverable}
        isClickable={isClickable} 
    >
        <div className="delete-button" onClick={onDelete}>
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

    cursor: ${({ isClickable }) => (isClickable ? "pointer" : "auto")};

    //border: 1px solid red;
    box-sizing: border-box;

    height: 86px;
    padding: 8px 16px;

    display: grid;
    grid-template-columns: 30% 1fr;

    border-radius: ${theme.borderRadius.round};
    box-shadow: ${theme.shadows.cardBasket};
    background: ${theme.colors.white};
    //background: ${theme.colors.primary};

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
        user-select: none;
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
                font-family: ${theme.fonts.family.openSans};
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
        .delete-button {
            border: none;
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

            .icon {
                width: ${theme.fonts.size.P3};
                height: ${theme.fonts.size.P3};
            }

            :hover {
                .icon {
                    color: ${theme.colors.dark};
                }
            }

            :active {
                .icon {
                    color: ${theme.colors.white};
                }
            }
        }
    }

    ${({ isHoverable, isSelected }) => isHoverable && isSelected && selectedStyle }
`

const selectedStyle = css`
  background: ${theme.colors.primary};

  .text-info {
    color: ${theme.colors.white};
  }
`