import React, {useRef, useState} from 'react'
import esindusedJSON from "../Data/esindused.json"
import { Link } from 'react-router-dom'

function HaldaEsindused() {
    const [esindused, muudaEsindused] = useState(esindusedJSON)
    const esindusRef = useRef()
    const telRef =useState()
    const aadrRef = useState()
    const [sonum, muudaSonum] = useState("")
    
    const kustuta = (jrknr) => {
        esindusedJSON.splice(jrknr, 1)
        muudaEsindused(esindusedJSON.slice())
    }
   
    const lisa = (esindus) => {
        esindusedJSON.push(esindus)
        muudaEsindused(esindusedJSON.slice())
      }
    
      const lisaUus = () => {
        const uusEsindus = {
          "nimi" : esindusRef.current.value,
           "tel": telRef.current.value, 
           "aadr": aadrRef.current.value
          }
        esindusedJSON.push(uusEsindus)
        muudaEsindused(esindusedJSON.slice())
      }
     
      const kontrolli = () => {
        if (esindusRef.current.value[0] === undefined) {
          muudaSonum("")
          return;
        }
      
        if (esindusRef.current.value[0] === esindusRef.current.value[0].toLowerCase()) {
        muudaSonum("Esinduse nimi algab väikese tähega!")
        return
      }
     
      if (telRef.current.value.startsWith("+372") === false){
        muudaSonum("Telefoni nr. peab algama suunakoodiga!")
        return
      }
       
      //if (esindusRef.current.value[0] === esindusRef.current.value[0].toUpperCase()) {
        muudaSonum("")
      
      
    }
  return (
    <div>
        <div>{sonum}</div>
        <labe>Uus esindus</labe><br/>
        <input onChange={kontrolli} ref={esindusRef} type="text" /><br/>
        <labe>Uus telefon</labe><br/>
        <input onChange={kontrolli} ref={telRef} type="text" /><br/>
        <labe>Uus aadress</labe><br/>
        <input ref={aadrRef} type="text" /><br/>
        <button onClick={lisaUus}>Lisa</button>
        <br></br>
           <div>Esinduste arv: {esindused.length}tk</div>
        {esindused.map((esindus, jrknr) =>
             <div key={jrknr}>
               <div><b>{esindus.nimi}</b></div>
               <div> {esindus.tel}</div>
               <div> {esindus.aadr}</div>
                <button onClick={() => kustuta(jrknr)}>x</button>
                <button onClick={() => lisa(esindus)}>Lisa üks lõppu juurde</button>
                <Link to={"/muuda-esindus/" + jrknr} >
                <button>Muuda</button>
                </Link>
             </div>)}
        <div>
           
        </div>


    </div>
  )
}

export default HaldaEsindused