import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/home/home'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import About from './components/about/about'
import { BrowserRouter } from 'react-router-dom'
import Contact from './components/contact/contact'

const router  = createBrowserRouter(

  createRoutesFromElements(
   
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home/>} /> 
    <Route path='about' element={<About/>} /> 
    <Route path ='contact' element={<Contact/>}/>
   
    </Route>
  )
   
)

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    {/* <BrowserRouter>
    <Header/>
   
    </BrowserRouter> */}

    <RouterProvider router={router} />
    {/* <BrowserRouter>
    <Footer/>
    </BrowserRouter> */}
   
  </StrictMode>
)
