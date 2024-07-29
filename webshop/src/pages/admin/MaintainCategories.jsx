import React, {useRef, useState} from 'react'
import {Link} from "react-router-dom"
import productsFromFile from "../../data/products.json"

function MaintainCategories() {
  const [category, editCategory] = useState(productsFromFile)
    const categoryRef = useRef()

    const remove = (index) => {
      productsFromFile.splice(index, 5)
      editCategory(productsFromFile.slice())
  }
  const addNew = () => {
    const newCategory =  {
        "name": categoryRef.current.value,
      }
      productsFromFile.push(addNew)
      editCategory(productsFromFile.slice())
    }



  return (
    <div>
      <label>New category</label><br/>
      <input ref={categoryRef} type="text" /><br/>
      <button onClick={addNew}>Add new</button>
      <br></br>
      <div>Number of categories: {category.length}tk</div>
        {category.map((category, index) =>
             <div key={index}>
                {category.title} 
                <button onClick={() => remove(index)}>x</button>
                
                <Link to={"/edit-product/" + index} >
                <button>Change</button>
                </Link>
                </div>)}

    </div>
  )
}

export default MaintainCategories