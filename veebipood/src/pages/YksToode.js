import React from 'react'
import { useParams } from 'react-router-dom'
import tootedJSON from "../Data/tooted.json"

function YksToode() {
  const {index} = useParams()
  const leitud = tootedJSON[index]
  return (
    <div>
       <div>URLs olev muutuja: {index}</div>
       <div>Toote nimetus:{leitud}</div> 
    </div>
  )
}

export default YksToode