import React, {useRef, useState} from 'react'
import joogidJSON from "../Data/joogid.json"

function LisaJook() {
    const [joogid, uuendaJoogid] = useState(joogidJSON)
    const joogidRef =useRef()

    const lisaUus = () => {
        joogidJSON.push(joogidRef.current.value)
        uuendaJoogid(joogidJSON.slice())
      }

  return (
    <div>
        <label>Uus toode</label><br/>
        <input ref={joogidRef} type="text" />
        <button onClick={lisaUus}>Lisa</button>
    </div>
  )
}

export default LisaJook