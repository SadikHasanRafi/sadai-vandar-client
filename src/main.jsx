import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import UserContext from './context/UserContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserContext>
          <BrowserRouter>
            <App></App>
          </BrowserRouter>
      </UserContext>
  </React.StrictMode>,
)
