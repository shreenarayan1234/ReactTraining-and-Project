import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WelcomeApp from './WelcomeApp.jsx'
import "bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WelcomeApp />
  </StrictMode>,
)
