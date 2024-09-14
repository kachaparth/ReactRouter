import { useState } from 'react'
import { BrowserRouter, Outlet } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {
 
  return (
<>
  <Header/>
  <Outlet/>
  <Footer/>
  </>
  )
}

export default App
