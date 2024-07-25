import React from 'react'
import { useParams } from 'react-router-dom'
import tootajadJSON from "../Data/tootajad.json"

function YksTootaja() {
  const {index} = useParams()
  const leitud = tootajadJSON[index]

  return (
    <div>
       <div>URLs olev muutuja: {index}</div>
       <div>Töötaja nimi:{leitud}</div> 
    </div>
  )
}

export default YksTootaja