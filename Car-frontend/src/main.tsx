import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import './index.css'
import App from './App.tsx'
import Navbar from './Component/header.tsx'
import LuxAutoFooter from './Component/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <App />
    <LuxAutoFooter/>
  </StrictMode>,
)
