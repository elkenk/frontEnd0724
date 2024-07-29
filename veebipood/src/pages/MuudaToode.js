import React, {useRef} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tootedJSON from "../Data/tooted.json"

function MuudaToode() {
  const {index} = useParams()
  const leitud = tootedJSON[index]
  const toodeRef = useRef()
  const navigate = useNavigate()
  
  const muuda = () => {
      tootedJSON[index] = toodeRef.current.value
      navigate("/Halda-tooteid")
  }
  return (
    <div>
        <div>URLs olev muutuja : {index}</div>
        <label>Toote nimetus</label> <br/>
        <input type="text" ref={toodeRef} defaultValue={leitud}/>
        <button onClick={muuda}>Muuda</button>
      </div>
  )
}

export default MuudaToode