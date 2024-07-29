import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import productsFromFile from "../../data/products.json"

function SingleProduct() {
  const [products] = useState(productsFromFile)
  const {index} = useParams()
  const product = productsFromFile[index]


  return (
    <div>
       
        <div key={index}>
          <img style={{width: "75px"}} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
          <div>{product.category}</div>
          <div>{product.rating.rate}/{product.rating.count}</div>
    </div>
  
  </div>
)
  

}

export default SingleProduct