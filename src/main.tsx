import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('__next')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
