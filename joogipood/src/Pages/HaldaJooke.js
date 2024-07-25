import React, {useRef, useState} from 'react'
import joogidJSON from "../Data/joogid.json"

function HaldaJooke() {
    const [joogid, uuendaJoogid] = useState(joogidJSON)
    const joogidRef =useRef()

    const kustuta = (index) => {
        joogidJSON.splice(index, 1)
        uuendaJoogid(joogidJSON.slice())
    }
   
  return (
    <div>
       {joogid.map((joogid, index) =>
             <div key={index}>
                {joogid}
                <button onClick={() => kustuta(index)}>x</button>
                </div>)}
                
    </div>
  )
}

export default HaldaJooke