
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'

import Home from "./pages/Home"
import Products from "./pages/Products"
import AboutUS from "./pages/AboutUS"
import ContactUS from "./pages/ContactUs"
import Admin from "./pages/Admin"
import Cart from "./pages/Cart"
import Single from "./pages/Single"
import NotFound from "./pages/NotFound"

import Footer from './components/Footer'


import { Routes, Route } from "react-router-dom"
function App() {

  return (
    <div className="App">
      <TopBar />
      <Navbar />

      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/single/id:" element={<Single />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={<NotFound />} />


      </Routes>
      <Footer />
    </div>
  )
}

export default App
