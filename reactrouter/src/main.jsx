import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/Contact/ContactUs.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",          // → This means "/"
        element: <Home />
      },
      {
        path: "about",     // → This means "/about"
        element: <About />
      },
      {
        path: "contact",   // → This means "/contact"
        element: <ContactUs />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
