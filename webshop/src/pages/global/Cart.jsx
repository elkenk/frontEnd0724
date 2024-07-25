import React, { useState } from 'react'
import productsInCart from "../../data/cart.json"

function Cart() {
  const [cart, setCart] = useState(productsInCart)
  
  
  return (
    <div>
        <div>Number of items in cart: {cart.length}tk</div>
        

    {cart.length === 0 &&
    <div>
    <div>No products to show!</div>
    
    </div>}

    </div>
  )
}

export default Cart