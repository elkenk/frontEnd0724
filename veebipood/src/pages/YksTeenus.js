import React from 'react'
import { useParams } from 'react-router-dom'
import teenusedJSON from "../Data/teenused.json"

function YksTeenus() {
  const {index} = useParams()
  const leitud = teenusedJSON[index]

  return (
    <div>
       <div>URLs olev muutuja: {index}</div>
       <div>Teenuse nimetus:{leitud.nimetus}</div> 
      
    </div>
  )
}

export default YksTeenus