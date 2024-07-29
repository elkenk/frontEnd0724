import React, {useRef, useState} from 'react'
import {Link} from "react-router-dom"
import productsFromFile from "../../data/products.json"

function MaintainProducts() {
  const [products, editProducts] = useState(productsFromFile)
  const idRef = useRef()
  const titleRef = useRef()
  const priceRef = useRef()
  const descriptionRef = useRef()
  const categoryRef = useRef()
  const ratingRef = useRef()

  const remove = (index) => {
    productsFromFile.splice(index, 1)
    editProducts(productsFromFile.slice())
}
const add = (product) => {
    productsFromFile.push(product)
    editProducts(productsFromFile.slice())
  }
  const addNew = () => {
    const newProduct =  {
        "name": idRef.current.value,
        "title": titleRef.current.value,
        "price": Number(priceRef.current.value),
        "description": descriptionRef.current.value,
        "category": categoryRef.current.value,
        "rating":Number (ratingRef.current.value)
    }
    productsFromFile.push(newProduct)
    editProducts(productsFromFile.slice())
  }

  return (
    <div>
      <label>New product</label><br/>
        <input ref={idRef} type="text" /><br/>
        <label>Title</label><br/>
        <input ref={titleRef} type="text" /><br/>
        <label>Price</label><br/>
        <input ref={priceRef} type="text" /><br/>
        <label>Description</label><br/>
        <input ref={descriptionRef} type="text" /><br/>
        <label>Category</label><br/>
        <input ref={categoryRef} type="text" /><br/>
        <label>Rating</label><br/>
        <input ref={ratingRef} type="text" /><br/>
        <button onClick={addNew}>Add new product</button>
        <br></br><br></br>
           
        {products.map((product, index) =>
             <div key={index}>
                 <img style={{width: "75px"}} src={product.image} alt="" />
                <div>{product.id}</div> 
                <div>{product.title}</div> 
                <div>{product.price}€ </div>
                <div>{product.description}</div> 
                <div>{product.category}</div> 
                <div>{product.rating.rate}/{product.rating.count}</div>
                <button onClick={() => remove(index)}>Delete</button>
                <button onClick={() => add(product)}>Add one more</button>
                <Link to={"/admin/edit-product/" + index} >
                <button>Change</button>
                </Link>
                <br></br><br></br>
             </div>)}
    </div>
  )
}

export default MaintainProducts