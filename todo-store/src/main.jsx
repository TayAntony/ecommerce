import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './pages/login'
import Inicio from './pages/inicio'
import Cadastro from './pages/cadastrar'
import Homepage from './pages/home'
import ProdutoDetalhe from './pages/produtodetalhe'
import './index.css'

import { createBrowserRouter, RouterProvider,} from "react-router-dom";

const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/cadastrar",
    element: <Cadastro/>,
  },
  {
    path: "/homepage",
    element: <Homepage/>,
  },
  {
    path: "/produtodetalhe/:id/",
    element: <ProdutoDetalhe/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <div className='p-4'>
      
    </div> */}
    <RouterProvider router={Rotas}/>
    
  </React.StrictMode>,
)
export default Rotas