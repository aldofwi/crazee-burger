import { createContext } from 'react'

export default createContext({

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
    handleDeleteBasket: () => {},

    titleEditRef: {},

    newProduct: {}, 
    setNewProduct: () => {},

    productSelected: {}, 
    setProductSelected: () => {},
});