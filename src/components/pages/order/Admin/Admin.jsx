import OrderContext from '/src/context/OrderContext';
import React, { useContext } from 'react'
import styled from 'styled-components'
import AdminPanel from './AdminPanel/AdminPanel'
import AdminTabs from './AdminTabs'

export default function Admin() {

  const { isCollapsed } = useContext(OrderContext);

  return (

    <AdminStyled>

        <AdminTabs />
        {!isCollapsed && <AdminPanel />}

    </AdminStyled>

  )
}

const AdminStyled = styled.div`

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`