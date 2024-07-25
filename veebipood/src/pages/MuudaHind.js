import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import hinnadJSON from "..//Data/hinnad.json"

// use on reacti erikood, mille react või reacti kasutav moodul on välja mõelnud
// koodi(javaScripti) lihtsutamiseks
// reeglid:
// 1:kõiki "use" algavaid ei tohi luua funktiooni sees
// 2: peab importrima
// 3: peab algama "use"ga
// 4: peavad olema luues sulud järel
// 5: ei tohi luua tingimuslikult (if / else sees)

function MuudaHind() {
    const {index} = useParams()
    const leitud = hinnadJSON[index]
    const hindRef = useRef()
    const navigate = useNavigate() 

    const muuda = () => {
        const uusHind = {
            "hind" : Number(hindRef.current.value),
            "lisaja" : "Kalle"
        }
        hinnadJSON[index] = uusHind
        navigate("/Halda-hinnad/") //viib linkide kasutamise asemel määratud lehele
        
    }
 
    return (
    <div>
        <div>URLs olev muutuja:{index}</div>
        <label>Hind</label> <br/>
        <input type="text" defaultValue={leitud.nimi} ref={hindRef}/> <br/>
        <button onClick={muuda}>Muuda</button> <br/>
       

    </div>
  )
}

export default MuudaHind