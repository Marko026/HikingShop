
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


import Home from "./pages/Home"
import Products from "./pages/Products"
import Single from "./pages/Single"
import AboutUS from "./pages/AboutUS"
import ContactUS from "./pages/ContactUs"
import Cart from "./pages/Cart"
import Admin from "./pages/Admin"
import NotFound from "./pages/NotFound"



import { Routes, Route } from "react-router-dom"
import { ProductsProvider } from './context/ProductsContext'
import { CartProvider } from './context/CartContext'
function App() {

  return (
    <div className="App">
      <ProductsProvider>
        <CartProvider>
          <TopBar />
          <Navbar />

          <Routes>


            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/single/:id" element={<Single />} />
            <Route path="/about" element={<AboutUS />} />
            <Route path="/contact" element={<ContactUS />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/*" element={<NotFound />} />


          </Routes>
          <Footer />
        </CartProvider>
      </ProductsProvider>
    </div>
  )
}

export default App
