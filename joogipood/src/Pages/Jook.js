import React from 'react'
import { useParams } from 'react-router-dom'
import joogidJSON from "../Data/joogid.json"

function Jook() {
    const { number } =useParams()
    const leitud = joogidJSON[number]

  return (
    <div>
        {leitud}
        {leitud === undefined && <div>Jooki ei leitud</div>}
    </div>
  )
}

export default Jook