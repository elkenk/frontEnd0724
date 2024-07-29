import React, { useRef, useState } from 'react'
import productsFromFile from "../../data/products.json"

function AddProduct() {
  const [message, changeMessage] = useState("Add product!")
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const ratingRef = useRef();
  const imageRef = useRef()

  const add = () => {
    if (idRef.current.value === "") {
     changeMessage ("Empty value can not be added!");
    } else {
        changeMessage("added: " + idRef.current.value);
        const newProduct =  {
          "id": (idRef.current.value),
          "title": (titleRef.current.value),
          "price": (priceRef.current.value),
          "description": (descriptionRef.current.value),
          "category": (categoryRef.current.value),
          "image": (imageRef.current.value),
          "rating": {
              "rate": (ratingRef.current.value),
              "count": 0
          }
      }
        productsFromFile.push(newProduct)
    }
  }

  return (
    <div>
       <div>{message}</div>
      <label>Product name:</label> <br/>
      <input ref={idRef} type="text"/> <br/>
      <label>Product title:</label> <br/>
      <input ref={titleRef} type="text"/><br/>
      <label>Product price:</label> <br/>
      <input ref={priceRef} type="text"/><br/>
      <label>Product description:</label> <br/>
      <input ref={descriptionRef} type="text"/><br/>
      <label>Product category:</label> <br/>
      <input ref={categoryRef} type="text"/><br/>
      <label>Product rating:</label> <br/>
      <input ref={ratingRef} type="text"/><br/>
      <label>Product image:</label> <br/>
      <input ref={imageRef} type="text"/><br/>
      <button onClick={add}>Enter</button> <br/>
    </div>
  )
}

export default AddProduct