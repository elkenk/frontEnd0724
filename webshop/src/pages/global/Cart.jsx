import React, { useState } from 'react'
import productsInCart from "../../data/cart.json"

function Cart() {
  const [cart] = useState(productsInCart)
  
  
  return (
    <div>
        <div>Number of items in cart: {cart.length}tk</div>
        {cart.map((product, index) =>
        <div key={index}>
          <img style={{width: "100px"}} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price}</div>
          <div>{product.rate}</div>
          </div>
        )}

    {cart.length === 0 &&
    <div>
    <div>No products to show!</div>
    
    </div>}

    </div>
  )
}

export default Cart