import styled from "styled-components"
import { theme } from "../../../../../../../theme"

export default function ImagePreview({ newProduct }) {
  return (
    <ImagePreviewStyled>
        {
        newProduct.imageSource ?
        <img src={newProduct.imageSource} alt={newProduct.title} />
                :
        <div className="empty-image">Aucune Image</div>
        }
    </ImagePreviewStyled>
  )
}

const ImagePreviewStyled = styled.div`
        
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
      object-position: center;
    }

    .empty-image {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greySemiDark};
      border-radius: ${theme.borderRadius.round};
    }
`
