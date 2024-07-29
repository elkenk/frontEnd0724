import React, { useState } from 'react'
//import { useNavigate, useParams} from "react-router-dom"
import productsFromFile from "../../data/products.json"
import cart from "../../data/cart.json"
import {ToastContainer, toast} from "react-toastify"
import {Link} from "react-router-dom"


function HomePage() {
  const [products, editProducts] = useState(productsFromFile)

  const sortAZ = () => {
    products.sort((a,b) => a.title.localeCompare(b.title))
    editProducts(products.slice())
  }
  const sortZA = () => {
    products.sort((a,b) => b.title.localeCompare(a.title))
    editProducts(products.slice())
  }
  const sortPriceAZ = () => {
    products.sort((a,b) => a.price - b.price)
    editProducts(products.slice())
  }
  const sortPriceZA = () => {
    products.sort((a,b) => b.price - a.price)
    editProducts(products.slice())
  }
  const sortRatingAZ = () => {
    products.sort((a,b) => a.rating.rate - b.rating.rate)
    editProducts(products.slice())
  }
  const sortRatingZA = () => {
    products.sort((a,b) => b.rating.rate - a.rating.rate)
    editProducts(products.slice())
  }
  // const {index} = useParams()
  // const productRef = useRef()
  // const navigate = useNavigate()
 
  // const addToCart = () => {
//    const added ={
//     "id" : (productRef.current.value)
//   }
//  productsFromFile[index] = addToCart
//   navigate("cart")
 // }
  const addToCart = (product) => {
    cart.push(product)
    toast.success("Added to cart !")
   }
  
  return (
    <div>
      <button onClick={sortAZ}>Sort from A to Z</button>
      <button onClick={sortZA}>Sort from Z to A</button>
      <button onClick={sortPriceAZ}>Sort price accending</button>
      <button onClick={sortPriceZA}>Sort price deccending</button>
      <button onClick={sortRatingAZ}>Sort rating accending</button>
      <button onClick={sortRatingZA}>Sort rating deccending </button>
      {products.map((product, index) =>
        <div key={index}>
          <img style={{width: "100px"}} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price}</div>
          <div>{product.rate}</div>

          <Link to={"/product/" + index }>
              <button>More details</button>
              </Link>
          
          <button onClick={()=>addToCart(product)}> Add to cart !</button> <br/><br/>
          </div>
      )}
      <ToastContainer/>
    </div>
  )
}

export default HomePage