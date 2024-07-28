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
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getMenu } from '../../../api/product';
import { getLocalStorage } from '../../../utils/window';

export default function OrderPage() {

  const titleEditRef = useRef();

  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [newProduct, setNewProduct]   = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const {username} = useParams();

  const {menu, setMenu, handleAddMenu, handleEditMenu, handleDeleteMenu, resetMenu} = useMenu();
  const {basket, setBasket, handleAddBasket, handleEditBasket, handleDeleteBasket} = useBasket();

  const initializeMenu = async () => {
    const menuReceived = await getMenu(username);
    setMenu(menuReceived);
  }

  const initializeBasket = () => { 
    const basketReceived = getLocalStorage(username); // asynchrone : no need await
    console.log("basketReceived :", basketReceived);
    setBasket(basketReceived);
   }

  useEffect(() => {
    initializeMenu()
  }, []);

  useEffect(() => {
    initializeBasket()
  }, []);

  const orderContextValue = {
    username,
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
  //getUser("Alex");


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