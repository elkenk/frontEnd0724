import React,  {useState} from 'react'
import { Link } from "react-router-dom"
import ostukorvJSON from "../Data/ostukorv.json"


function Ostukorv() {
const [ostukorv, uuendaOstukorv]= useState(ostukorvJSON)
const originaali = () => {
  uuendaOstukorv(ostukorvJSON)
}
const tyhjenda = () => {
  uuendaOstukorv([])
}

// const kustutaEsimene = () => {
//   ostukorv.splice(0, 1); //esimene nr mitmendat kustutame, teine mitu kustutame
//   uuendaOstukorv(ostukorv.slice())
// }
// const kustutaTeine = () => {
//   ostukorv.splice(1, 1); //esimene nr mitmendat kustutame, teine mitu kustutame
//   uuendaOstukorv(ostukorv.slice())
// }
// const kustutaKolmas = () => {
//   ostukorv.splice(2, 1); //esimene nr mitmendat kustutame, teine mitu kustutame
//   uuendaOstukorv(ostukorv.slice())
// }
const kustuta = (index) => {
  ostukorvJSON.splice(index, 1)
  uuendaOstukorv(ostukorvJSON.slice())
}
const lisa = (toode) => {
  ostukorvJSON.push(toode)
  uuendaOstukorv(ostukorvJSON.slice())
}

  return (
    <div>
      <button onClick={originaali}>Originaali tagasi</button>
      <button onClick={tyhjenda}>tühjenda</button>
      <button onClick={() => kustuta(0)}>Kustuta esimene</button>
      <button onClick={() => kustuta(1)}>Kustuta teine</button>
      <button onClick={() => kustuta(2)}>Kustuta kolmas</button>
      {ostukorv.map((toode, index) => 
        
        <div key={index}>
          {index}.
          {toode}
        
        <button onClick={() => kustuta(index)}>x</button>
        <button onClick={() => lisa(toode)}>Lisa üks lõppu juurde</button>
        </div>)}
   
   {ostukorv.length === 0 &&
    <div>
    <div>Ostukorv on tühi</div>
    <Link to="/avaleht">Mine avalehele</Link>
    </div>}
   
    </div>
  )
}

export default Ostukorv