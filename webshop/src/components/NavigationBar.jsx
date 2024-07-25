import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {

  return (
    <div>
      <Link to="/">
      <button>Home page</button>
      </Link>
      <Link to="cart">
      <button>Shopping cart</button>
      </Link>
    </div>
  )
}

export default NavigationBar