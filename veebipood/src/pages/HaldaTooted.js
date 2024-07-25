import React, {useRef, useState} from 'react'
import tootedJSON from "../Data/tooted.json"
import { Link } from 'react-router-dom'

function HaldaTooted() {
  const [tooted, muudaTooted] = useState(tootedJSON)
  const toodeRef = useRef()

  const kustuta = (jrknr) => {
      tootedJSON.splice(jrknr, 1)
      muudaTooted(tootedJSON.slice())
  }
  const lisa = (toode) => {
    tootedJSON.push(toode)
    muudaTooted(tootedJSON.slice())
  }
  const lisaUus = () => {
    tootedJSON.push(toodeRef.current.value)
    muudaTooted(tootedJSON.slice())
  }

  return (
    <div>
<label>Uus toode</label><br/>
        <input ref={toodeRef} type="text" />
        <button onClick={lisaUus}>Lisa</button>
        <br></br>
           <div>Toodete arv: {tooted.length}tk</div>
        {tooted.map((toode, jrknr) =>
             <div key={jrknr}>
                {toode}
                <button onClick={() => kustuta(jrknr)}>x</button>
                <button onClick={() => lisa(toode)}>Lisa üks lõppu juurde</button>
                <Link to={"/muuda-toode/" + jrknr}>
                <button>Muuda</button>
                </Link>
             </div>)}
        <div></div>

    </div>
  )
}

export default HaldaTooted