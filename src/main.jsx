import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './components/layout'
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente'
import Index, { loader as clientesLoader } from './pages/Index'
import EditarCliente, { loader as editarClienteLoader, action as editarClienteAction } from './pages/EditarCliente'
import ErrorPage from './components/ErrorPage'
import { action as eliminarClienteAction } from './components/Cliente'

const router = createBrowserRouter([
  {
    // path es para definir las urls (en este caso es la página principal)
    path: '/',
    // element es lo que se va a mostrar en la pagina
    element: <Layout />,
    // En el children ponemos todas las paginas que querramos que estén dentro de otra pagina (en este caso, "clientes" es parte del inicio)
    children: [
      {
        // El index:true es para poder definirle un element a la pagina principal
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: eliminarClienteAction
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
