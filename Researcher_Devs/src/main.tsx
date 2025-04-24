import { createBrowserRouter, RouterProvider} from 'react-router' // Gerenciadpr de rotas.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


//pages
import { Home } from './routes/Home.tsx'
import { App } from './App.tsx'

const router = createBrowserRouter([
  {
    path: "/", // Página principal 
    element:<App/>, // Component App sendo chamado na primeira página
    children:[ // Filho do objeto pricipal
      {
        path: "/",  // Rota filha
        element: <Home/>, // Component inicial
      },
    ],
  },
]);
createRoot(document.getElementById('root')!).render( // Elemento que será criado e encaminhado par ao HTML
  <StrictMode>
    <RouterProvider router={router}/> {/*Definição das rotas*/}
  </StrictMode>,
)
