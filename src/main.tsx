import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import FullPage from './template/FullPage'
import { GameProvider } from './context/GameContext'
import Toast from './components/Toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameProvider>
      <FullPage />
      <Toast />
    </GameProvider>
  </StrictMode>,
)
