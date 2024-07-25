import React, {useState} from 'react'
import hinnadJSON from "../Data/hinnad.json"
import { Link } from 'react-router-dom'

// Array võimalused:
//[].splice() ----> kustutamine. esimene nr mitmendat(alates nullist), teine mitu tk.
// [].sort() ----> sorteerib sisu, kui täidan sulud, siis selle järgi
// [].map() ----> iga elemendi osas teeme HTML lõigu
//[].length ----> array pikkus(elementide arv)
// [].filter() ----> array elemntide mingi tingimuse järgi alles jätmine, tingimus sulgude sees

function Hinnad() {
  const [hinnad, muudaHinnad] = useState(hinnadJSON)

  const originaali = () => {
    muudaHinnad(hinnadJSON)
  }


  const sorteeriAZ = () =>{
      hinnad.sort((a, b) => a.hind.toString().localeCompare(b.hind.toString())); // kui sort sulgude sisu ei täida, läheb tähetikulises
      muudaHinnad(hinnad.slice());
  }

  const sorteeriZA = () => {
    hinnad.sort((a, b) => b.hind.toString().localeCompare(a.hind.toString()))
   
    muudaHinnad(hinnad.slice());

  }

  const sorteeriKasvavalt = () => {
    hinnad.sort((a, b) => a.hind - b.hind)
    muudaHinnad(hinnad.slice())
  }

  const sorteeriKahanevalt = () => {
    hinnad.sort((a, b) => b.hind - a.hind)
    muudaHinnad(hinnad.slice())
 }

 const filtreeriSuuremadKui100 = () => {
    const vastus = hinnad.filter(hind => hind.hind > 100);
    muudaHinnad(vastus);
 }
 const filtreeriVaiksemadKui50 = () => {
  const vastus = hinnad.filter(hind => hind.hind < 50);
  muudaHinnad(vastus);
 }
 const arvutaKokku = () => {
  let summa = 0
 // summa = summa + 10
  //summa = summa + 15
 // summa = summa +35
  hinnad.forEach(hind => summa = summa + hind.hind)
  return summa
 }

  return (

    <div>
      <div>Hindade kogusumma: {arvutaKokku()}</div>
      <div>Hindade arv: {hinnad.length}tk</div>
      <button onClick={originaali}>Tagasi originaali</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <br></br>
      <button onClick={filtreeriSuuremadKui100}>Filtreeri üle 100</button>
      <button onClick={filtreeriVaiksemadKui50}>Fitreeri alla 50</button>
      {hinnad.map((hind, i) =>
         <div key={i}>
          {hind.hind} ({hind.lisaja})
          <Link to={"/hind/" + i}>
          <button>Vt täpsemalt</button>
          </Link>
          </div>)}
    </div>
  )
}

export default Hinnad