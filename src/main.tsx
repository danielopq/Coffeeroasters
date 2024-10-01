import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CoffeeRoastersApp from './CoffeeRoastersApp'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CoffeeRoastersApp />
  </StrictMode>,
)
