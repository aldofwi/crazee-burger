import { theme } from '../theme';
import { useRef, useState } from 'react';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import styled from 'styled-components';
import { fakeMenu } from '/src/fakeData/fakeMenu'
import OrderContext from '/src/context/OrderContext';
import { EMPTY_PRODUCT } from '../../../enums/product';
import { deepClone } from '../../../utils/array';

export default function OrderPage() {

  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [newProduct, setNewProduct]   = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(fakeMenu.SMALL[1]);
  const [currentTabSelected, setCurrentTabSelected] = useState("edit");
  const titleEditRef = useRef();

  // State Handler (ou Gestionnaire de state)
  const handleAdd = (newProduct) => { 
      // 1. [...menu] pas de shallow copy, que en surface
      const menuCopy = deepClone(menu);

      // 2. manip de la copie du tableau
      const menuUpdated = [newProduct, ...menuCopy];

      // 3. update du statut
      setMenu(menuUpdated);
  }

  const handleEdit = (productBeingEdited) => {
    // 1. copy du menu (deep clone)
    const menuCopy = deepClone(menu);
    
    // 2. manip de la copie du tableau
    const indexOfMenuToUpdated = menu.findIndex((product) => product.id === productBeingEdited.id);
    menuCopy[indexOfMenuToUpdated] = productBeingEdited;
    
    // 3. update du statut
    setMenu(menuCopy);
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
    handleEdit,
    handleDelete,
    titleEditRef,
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
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    padding: 0 10px 0 10px;
    border-radius: ${theme.borderRadius.extraRound};
  }
  
`