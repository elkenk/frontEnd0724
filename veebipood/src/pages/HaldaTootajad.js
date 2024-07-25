import React, {useRef, useState} from 'react'
import tootajadJSON from "../Data/tootajad.json"
import {Link} from "react-router-dom"
//kustutamine
//1 juurde iseesnda lõppu lisamine
//1 ise kirjutades lõppu juurde
// key{}
//koguarv
//jälgida,et kui lisada/kustutada, kasutaja lehele minnes jääb toimima
//halda tooteid lehele sama.
function HaldaTootajad() {
  const [tootajad, muudaTootajad] = useState(tootajadJSON)
    const tootajaRef = useRef()

    const kustuta = (jrknr) => {
        tootajadJSON.splice(jrknr, 1)
        muudaTootajad(tootajadJSON.slice())
    }
    const lisa = (tootaja) => {
      tootajadJSON.push(tootaja)
      muudaTootajad(tootajadJSON.slice())
    }
    const lisaUus = () => {
      tootajadJSON.push(tootajaRef.current.value)
      muudaTootajad(tootajadJSON.slice())
    }
  return (
    <div>
      <labe>Uus töötaja</labe><br/>
        <input ref={tootajaRef} type="text" />
        <button onClick={lisaUus}>Lisa</button>
        <br></br>
           <div>Töötajate arv: {tootajad.length}tk</div>
        {tootajad.map((tootaja, jrknr) =>
             <div key={jrknr}>
                {tootaja}
                <button onClick={() => kustuta(jrknr)}>x</button>
                <button onClick={() => lisa(tootaja)}>Lisa üks lõppu juurde</button>
                <Link to={"/muuda-tootaja/" + jrknr}>
                <button>Muuda</button>
                </Link>
             </div>)}
        <div></div>
    </div>
  )
}

export default HaldaTootajad