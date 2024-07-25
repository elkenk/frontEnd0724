import React, {useRef} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tootajadJSON from "../Data/tootajad.json"


function MuudaTootaja() {
  const {index} = useParams()
  const leitud = tootajadJSON[index]
  const tootajaRef = useRef()
  const navigate = useNavigate()

  const muuda = () => {
    tootajadJSON[index] = tootajaRef.current.value
    navigate("/Halda-tootajad")
}

  return (
    <div>
      <div>URLs olev muutuja : {index}</div>
        <label>Tootaja nimi</label> <br/>
        <input type="text" ref={tootajaRef} defaultValue={leitud}/>
        <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaTootaja