import React, { useState, useRef } from 'react'
import { useNavigate, useParams} from "react-router-dom"
import productsFromFile from "../../data/products.json"

function HomePage() {
  const [products, setProducts] = useState(productsFromFile)
  const {index} = useParams()
  const productRef = useRef()
  const navigate = useNavigate()
 
  const addToCart = () => {
   const added ={
    "id" : (productRef.current.value)
  }
 productsFromFile[index] = addToCart
  navigate("cart")
  }
  
  return (
    <div>
      {products.map(product =>
        <div key={product.id}>
          <img style={{width: "100px"}} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price}</div>
          
          <button onClick={addToCart}> Add to cart !</button> <br/><br/>
          </div>
      )}
    </div>
  )
}

export default HomePage