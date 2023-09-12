import React, {} from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './componentes/Erro.jsx'
import Home from './componentes/Home.jsx'
import Produtos from './componentes/Produtos.jsx'
import Exemplo1 from './componentes/Exemplo1.jsx'


/*criando o método que vai executar rotas*/

const router = createBrowserRouter([
  {
    /*caminho elemento pai */
    path:'/', element: <App />,
    errorElement: <Error />,

    /**chamando os elementos de filhos*/
    children: [

      {path: '/', element: <Home />},
      {path: '/Produtos', element: <Produtos />},
      {path: '/Exemplo1', element: <Exemplo1 />},
    
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
