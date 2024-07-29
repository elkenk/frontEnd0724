import React, {useRef} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productsFromFile from "../../data/products.json"


function EditProduct() {
  const {index} = useParams()
  const found = productsFromFile[index]
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const ratingRef = useRef();
  const navigate = useNavigate()
  
  const edit = () => {
      productsFromFile[index] =  {
        "id": (idRef.current.value),
        "title": (titleRef.current.value),
        "price": (priceRef.current.value),
        "description": (descriptionRef.current.value),
        "category": (categoryRef.current.value),
        "image": found.image,
        "rating": {
            "rate": (ratingRef.current.value),
            "count": found.rating.count
        }
    }
      navigate("/admin/maintain-products")
  }
  return (
    <div>
      
        <label>Product name:</label> <br/>
        <input type="text" ref={idRef} defaultValue={found.id}/><br/>
        <label>Product title:</label> <br/>
        <input type="text" ref={titleRef} defaultValue={found.title}/><br/>
        <label>Product price:</label> <br/>
        <input type="text" ref={priceRef} defaultValue={found.price}/><br/>
        <label>Product description:</label> <br/>
        <input type="text" ref={descriptionRef} defaultValue={found.description}/><br/>
        <label>Product category:</label> <br/>
        <input type="text" ref={categoryRef} defaultValue={found.category}/><br/>
        <label>Product rating:</label> <br/>
        <input type="text" ref={ratingRef} defaultValue={found.rating.rate}/><br/>
        <button onClick={edit}>Change</button>
    </div>
  )
}

export default EditProduct