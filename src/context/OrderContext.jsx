import { createContext } from 'react'

export default createContext({

    username: "",
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},

    currentTabSelected: "",
    setCurrentTabSelected: () => {},

    menu: [],
    resetMenu: () => {},
    handleAddMenu: () => {},
    handleEditMenu: () => {},
    handleDeleteMenu: () => {},

    handleAddBasket: () => {},
    handleEditBasket: () => {},
    handleDeleteBasket: () => {},

    titleEditRef: {},

    newProduct: {}, 
    setNewProduct: () => {},

    productSelected: {}, 
    setProductSelected: () => {},
});