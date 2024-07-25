import React, { useState } from 'react'

function Kujundus() {
    const [valitud, uuendaValitud] = useState("Family")
  return (
    <div>
        <span
        className={valitud === "Family" ? "pakett-aktiivne" : "pakett"}
        onClick={() => uuendaValitud("Family")}>
            Family
        </span>
        <span
        className={valitud === "Standard" ? "pakett-aktiivne" : "pakett"}
        onClick={() => uuendaValitud("Standard")}>
            Standard
        </span>
        <span
        className={valitud === "Mini" ? "pakett-aktiivne" : "pakett"}
        onClick={() => uuendaValitud("Mini")}>
            Mini
        </span>
    </div>
      
  )
}

export default Kujundus