import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import FullPage from './template/FullPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <FullPage />
  </StrictMode>,
)
