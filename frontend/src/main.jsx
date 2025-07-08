import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StepPorvider } from './StepProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StepPorvider>
      <App />
    </StepPorvider>
  </StrictMode>
)
