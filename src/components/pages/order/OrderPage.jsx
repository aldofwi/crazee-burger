import { theme } from '../theme';
import { useState } from 'react';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import styled from 'styled-components';
import { fakeMenu } from '/src/fakeData/fakeMenu'
import OrderContext from '/src/context/OrderContext';
import { EMPTY_PRODUCT } from '../../../enums/product';

export default function OrderPage() {

  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [newProduct, setNewProduct]   = useState(EMPTY_PRODUCT);
  const [currentTabSelected, setCurrentTabSelected] = useState("edit");
  const [productSelected, setProductSelected] = useState({});

  const handleAdd = (newProduct) => { 
      // 1. copy du menu
      const menuCopy = [...menu];
      // 2. manip de la copie du tableau
      const menuUpdated = [newProduct, ...menuCopy];
      // 3. update du statut
      setMenu(menuUpdated);
  }

  const handleDelete = (idOfDeleteProduct) => { 
    // 1. copy du menu
    const menuCopy = [...menu];
    // 2. manip de la copie du tableau
    const menuUpdated = menuCopy.filter((product) => product.id !== idOfDeleteProduct);
    // 3. update du statut
    setMenu(menuUpdated);
 }

 const resetMenu = () => { 
  setMenu(fakeMenu.MEDIUM);
}

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected, 
    setCurrentTabSelected,
    menu,
    resetMenu,
    handleAdd,
    handleDelete,
    newProduct, 
    setNewProduct,
    productSelected, 
    setProductSelected
  }

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
    //background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    padding: 0 10px 0 10px;
    border-radius: ${theme.borderRadius.extraRound};

  }
  
`