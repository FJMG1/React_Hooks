import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TaskAdd from './TaskAdd.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskAdd />
  </StrictMode>,
)
