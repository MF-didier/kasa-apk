import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/route'
import './styles/main.scss'


  /**
   * @module Main
   * @description
   * Ce composant permet de créer un container pour la page about
   * @returns {JSX.Element} - Un container pour la page about
   * @example
   * <Main />
   */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)



