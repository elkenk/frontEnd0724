import React, { useState } from 'react'

function Avaleht() {
  const[kogus, muudaKogus] = useState(Number(localStorage.getItem("kogus")) || 0) // hinnad , kogused
  const [sonum, muudaSonum] =useState("Muuda kogust!") //postiindeks, isikukood, tel.numbrid, sõnad
  const [laigitud, muudaLaigitud] = useState(false); //tõene või väär,  0/1

  function nulli() {
    muudaKogus(0)
    muudaSonum("Nullisid koguse")
    localStorage.setItem("kogus", 0)
  }
    function vahenda() {
      muudaKogus(kogus-1)
      muudaSonum("Vähendasid kogust!")
      localStorage.setItem("kogus", kogus - 1)
  }
  function suurenda() {
    muudaKogus(kogus+1)
    muudaSonum("Suurendasid kogust!")
    localStorage.setItem("kogus", kogus + 1)
}

  return (
    <div>

      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      <button onClick={() => muudaLaigitud(true)}>Muuda laigituks</button>
      <button onClick={() => muudaLaigitud(false)}>Muuda mitte laigituks</button>
      <button onClick={() => muudaLaigitud(!laigitud)}>Muuda like`i</button> 
      {/* viimane on sama funktsioon ühe nupui all */}
      <div>{sonum}</div>
      <button disabled={kogus === 0} onClick={nulli}>Tagasi nulli</button> <br/>
      {kogus !== 0 && <button onClick={vahenda}>-</button>}
      <span>kogus {kogus} tk</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht