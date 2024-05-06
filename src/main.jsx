import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import router from './router/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <RootLayout />
    </RouterProvider>
  </React.StrictMode>,
)
