import React, { useState } from 'react'
import teenusedJSON from "../Data/teenused.json"
import {Link} from "react-router-dom"

function Teenused() {
    const [teenused, muudaTeenused] = useState(teenusedJSON)

    const sorteeriAZ = () => {
        teenused.sort((a,b) => a.nimetus.localeCompare(b.nimetus))
        muudaTeenused(teenused.slice())
    }
    const sorteeriPakkujaAZ = () => {
        teenused.sort((a,b) => a.teenusepakkuja.localeCompare(b.teenusepakkuja))
        muudaTeenused(teenused.slice())
    }
    const SorteeriHindKasvavalt = () => {
        teenused.sort((a,b) => a.hind - b.hind)
        muudaTeenused(teenused.slice())
    }
    const FiltreeriArvutitargaTeenused = () => {
       const vastus =teenused.filter(teenus => teenus.teenusepakkuja === "Arvutitark")
        muudaTeenused(vastus)
    }
    
  return (
    <div>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriPakkujaAZ}>Sorteeri teenusepakkuja A-Z</button>
        <button onClick={SorteeriHindKasvavalt}>Sorteeri Hind Kasvavalt</button>
        <button onClick={FiltreeriArvutitargaTeenused}>Filtreeri Arvutitarga Teenused</button>
        {teenused.map((teenus,i) =>
            <div key={i}>
                {teenus.nimetus} {teenus.hind}€ - {teenus.teenusepakkuja}
              
              <Link to={"/Teenus/" + i}>
              <button>Vaata detailsemalt</button>
              </Link>
            </div>)}
    </div>
  )
}

export default Teenused