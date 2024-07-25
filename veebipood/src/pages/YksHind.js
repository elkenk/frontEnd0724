import React from 'react'
import { useParams } from 'react-router-dom'
import hinnadJSON from "../Data/hinnad.json"

function YksHind() {
  const {index} = useParams()
  const leitud = hinnadJSON[index]

  return (
    <div>
          <div>URLs olev muutuja: {index}</div>
       <div>Hind:{leitud.hind}</div> 
       <div>Hind:{leitud.lisaja}</div> 
      
    </div>
  )
}

export default YksHind