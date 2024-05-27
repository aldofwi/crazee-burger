import LoginPage from './components/pages/login/LoginPage';
import OrderPage from './components/pages/order/OrderPage';
import ErrorPage from './components/pages/error/ErrorPage';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {  Routes,
          Route,
          Link} from "react-router-dom"

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

        <Routes>

          <Route path='/'             element={<LoginPage />} />
          <Route path='/order/:name'  element={<OrderPage />} />
          <Route path='*'             element={<ErrorPage />} />
          
        </Routes>

    </>
  )
}

export default App;
