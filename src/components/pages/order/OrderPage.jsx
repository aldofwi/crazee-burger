import { EMPTY_PRODUCT } from '../../../enums/product';
import OrderContext from '/src/context/OrderContext';
import { useMenu } from '../../../hooks/useMenu';
import { useRef, useState } from 'react';
import { theme } from '../../../theme';
import styled from 'styled-components';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import { useBasket } from '../../../hooks/useBasket';
import { getUser } from '../../../api/user';

export default function OrderPage() {

  const titleEditRef = useRef();

  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [newProduct, setNewProduct]   = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");

  const {menu, handleAddMenu, handleEditMenu, handleDeleteMenu, resetMenu} = useMenu();
  const {basket, handleAddBasket, handleEditBasket, handleDeleteBasket} = useBasket();

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected, 
    setCurrentTabSelected,
    menu,
    resetMenu,
    handleAddMenu,
    handleEditMenu,
    handleDeleteMenu,
    basket,
    handleAddBasket,
    handleEditBasket,
    handleDeleteBasket,
    titleEditRef,
    newProduct, 
    setNewProduct,
    productSelected, 
    setProductSelected
  }

  //console.log("import.meta.env.REACT_APP_API_KEY = ", import.meta.env.VITE_APP_API_KEY);

  getUser("Alex");


  return (

      <OrderContext.Provider value={orderContextValue}>
        <OrderPageStyled>

            <div className="container">
                <Navbar />
                <Main />
            </div>

        </OrderPageStyled>
      </OrderContext.Provider>

  )
}

const OrderPageStyled = styled.div`

  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    padding: 0 10px 0 10px;
    border-radius: ${theme.borderRadius.extraRound};
  }
  
`