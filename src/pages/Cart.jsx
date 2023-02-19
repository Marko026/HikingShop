import React from 'react'
import { useContext } from 'react'
import ProductsContext from '../context/ProductsContext'
import CartContext from '../context/CartContext'
const Cart = () => {

    const { products, setProducts } = useContext(ProductsContext)
    const { cart, setCart } = useContext(CartContext)
    return (
        <div>Cart</div>
    )
}

export default Cart