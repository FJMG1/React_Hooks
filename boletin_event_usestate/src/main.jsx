import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contador from './Contador.jsx'
import CambiarTexto from './CambiarTexto.jsx'
import MostrarOcultar from './MostrarOcultar.jsx'
import ContadorClics from './ContadorClics.jsx'
import LimiteContador from './LimiteContador.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Contador/>
    <CambiarTexto/>
    <MostrarOcultar/>
    <ContadorClics/>
    <LimiteContador/>
  </StrictMode>,
)
