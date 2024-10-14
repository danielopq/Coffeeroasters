import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CoffeeRoastersApp from './CoffeeRoastersApp';
import { BrowserRouter } from 'react-router-dom';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CoffeeRoastersApp />
    </BrowserRouter>
  </StrictMode>,
)
