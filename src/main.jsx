import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CoinContextProvider from './context/CoinContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CoinContextProvider>
        <App />
      </CoinContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
