import React, { useState } from 'react'
import tootajadJSON from "../Data/tootajad.json"

//8x töötajat
// töötajate tähtede kokkuarvutus

function Tootajad() {
    const [tootajad, muudaTootajad] = useState(tootajadJSON)
    const originaali = () => {
      muudaTootajad(tootajadJSON)
    }
    const sorteeriAZ =( ) => {
      tootajad.sort((a,b) =>a.localeCompare(b)); //localeCompare kasutada pigem
      muudaTootajad(tootajad.slice()); 
  }

  const sorteeriZA = () => {
    tootajad.sort((a,b) =>b.localeCompare(a));
    muudaTootajad(tootajad.slice());
  }
  const sorteeriTahtedeArvKasv = () => {
    tootajad.sort((a,b) => a.length -b.length);
    muudaTootajad(tootajad.slice());
    
  }

  const sorteeriTahtedeArvKah = () => {
    tootajad.sort((a,b) => b.length -a.length);
    muudaTootajad(tootajad.slice());
    
  }

  const sorteeriTeineTahtAZ = () => {
    tootajad.sort((a,b) =>a[1].localeCompare(b[1]));
    muudaTootajad(tootajad.slice());
    
  }
  const filtreeriMgaAlgavad = () => {
    const vastus = tootajad.filter(e => e.startsWith("M"));
    muudaTootajad(vastus);
    
  }

  const filtreeri3Tahelised = () => {
    const vastus = tootajad.filter(e => e.length === 3);
    muudaTootajad(vastus);
  }

  const filtreeriVah5Tahelised = () => {
    const vastus = tootajad.filter(e => e.length >= 5);
    muudaTootajad(vastus);
  }

  const filtreeriAiLyhenditSisaldavad = () => {
    const vastus = tootajad.filter(e => e.toLowerCase().includes("ai"));
    muudaTootajad(vastus);
     }

  const filtreeriNeljasTahtI = () => {
    const vastus = tootajad.filter(e => e[3] === "i");
    muudaTootajad(vastus);
     }
     const filtreeriPaarisArvulised = () => {
      const vastus = tootajad.filter(e => e.length % 2  ===0)
      muudaTootajad(vastus)
     }
   
  return (
    <div>
      <div>Töötajate arv: {tootajad.length}tk</div>
       <button onClick={originaali}>Originaali</button>
              <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
              <button onClick={sorteeriZA}>Sorteeri Z-A</button>
              <button onClick={sorteeriTahtedeArvKasv}>Sorteeri tähed kasvavalt</button>
              <button onClick={sorteeriTahtedeArvKah}>Sorteeri tähed kahanevalt</button>
              <button onClick={sorteeriTeineTahtAZ}>Sorteeri teine täht A-Z</button>
              <br></br>
              <button onClick={filtreeriMgaAlgavad}>Filtreeri M´ga algavad</button>
              <button onClick={filtreeri3Tahelised}>Filtreeri 3 tähelised</button>
              <button onClick={filtreeriVah5Tahelised}>Filtreeri vähemalt 5 tähelised</button>
              <button onClick={filtreeriAiLyhenditSisaldavad}>Filtreeri "ai" lühendit sisaldavad</button>
              <button onClick={filtreeriNeljasTahtI}>Filtreeri kellel on neljas täht "i"</button>
              <button onClick={filtreeriPaarisArvulised}>Filtreeri kellel paarisarv tähti</button>
{tootajad.map(tootajad => 
<div key={tootajad}>
  {tootajad}
  </div>)}
    </div>
  )
}

export default Tootajad