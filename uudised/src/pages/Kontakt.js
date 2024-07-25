import React, { useState } from 'react'

function Kontakt() {
  const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState(false);
  const [n2itaTelYlemiste, muudaN2itaTelYleminste] = useState(false);
  const [n2itaTelTasku, muudaN2itaTelTasku] = useState(false);


  return (
    <div><div>See on kontaktide leht, nähtav localhost3000/kontakt aadressil</div>
        <div className="vta">Võta meiega ühendust:</div>
        <br/>
        <div className={n2itaTelKristiine === true ? "valitud" : undefined} onClick={() => muudaN2itaTelKristiine(!n2itaTelKristiine)}>Kristiine keskus</div>
        {n2itaTelKristiine && <div className="valitud">+358795688</div>}
        <div className={n2itaTelKristiine === true ? "valitud" : undefined}>endla 45</div>
        <br />
        <div className={n2itaTelYlemiste === true ? "valitud" : undefined} onClick={() => muudaN2itaTelYleminste(!n2itaTelYlemiste)}>Ülemiste keskus</div>
        {n2itaTelYlemiste && <div className="valitud">+4746108109</div> }
        <div className={n2itaTelYlemiste === true ? "valitud" : undefined}>Suur-Sõjamäe 4</div>
        
        <br/>
         <div className={n2itaTelTasku === true ? "valitud" : undefined} onClick={() => muudaN2itaTelTasku(!n2itaTelTasku)}>Tasku keskus</div>
         {n2itaTelTasku && <div className="valitud">+3727453492</div>}
        <div className={n2itaTelTasku === true ? "valitud" : undefined}>Turu 2</div>
        
    </div>
  )
}

export default Kontakt