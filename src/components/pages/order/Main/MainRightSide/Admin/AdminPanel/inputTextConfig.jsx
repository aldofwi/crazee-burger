import { FaHamburger } from "react-icons/fa"
import { MdOutlineEuro } from "react-icons/md"
import { BsFillCameraFill } from "react-icons/bs"

export const getInputTextsConfig = (newProduct) => [
    {
        id: "0",
        name: "title",
        type: "text",
        value: newProduct.title,
        placeholder: "Nom du produit (ex: Beacon Beast)",
        iconBeforeInput: <FaHamburger />,
      },
      {
        id: "1",
        name: "imageSource",
        type: "text",
        value: newProduct.imageSource,
        placeholder: "Lien URL d'une image",
        iconBeforeInput: <BsFillCameraFill />,
      },
      {
        id: "2",
        name: "price",
        type: "text",
        value: newProduct.price ? newProduct.price : "",
        placeholder: "Prix du produit",
        iconBeforeInput: <MdOutlineEuro />,
      },
]
