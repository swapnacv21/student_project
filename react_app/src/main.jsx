import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import List from './Components/List.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <List />
  </StrictMode>,
)
