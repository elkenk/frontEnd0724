import React, { useState } from 'react'

function Meist() {
  const [kontakt, n2itaKontakt] =useState("");
  const tootajad = [
    
      {
          Nimi: "Arvo",
          Ala: "Muusika",
          Telefon: "täpsustamisel"
      },
      {
          Nimi: "Kelly",
          Ala: "Reporter",
          Telefon: "täpsustamisel"
      },
      {
          Nimi: "Edward",
          Ala: "Kujundus",
          Telefon: "täpsustamisel"
      },
      {
          Nimi: "Kerli",
          Ala: "Välisturud",
          Telefon: "täpsustamisel"
      },
      {
          Nimi: "Jüri",
          Ala: "Kaamera",
          Telefon: "täpsustamisel"
      },
      {
          Nimi: "Gert",
          Ala: "Reklaam",
          Telefon: "täpsustamisel"
      }
  ]

      const [valitud, uuendaValitud] = useState("")
      const v6tayhendust = (tootaja) => {
        n2itaKontakt(tootaja.Telefon)
        uuendaValitud(tootaja.Nimi)
      }
  return (
    <div><div>See on leht meist, nähtav localhost3000/meist aadressil</div>
    <div>Meie töötajad</div>
    VALITUD INIMENE: {valitud}
    <br/>
    <div>{tootajad.map(tootaja =>
      <div className={tootaja.Nimi === valitud ? "valitud" : undefined}>
        <div>{tootaja.Nimi}</div>
        <div>{tootaja.Ala}</div>
        <button onClick={() => n2itaKontakt(tootaja.Telefon)}>Võta ühendust</button>
        <br/><br/>
        </div>
    )}

    </div>
    {/* <div>Arvo Pärt</div>

    <div>Uudisklippide taustamuusika</div>
    <button onClick={() => n2itaKontakt(8009002002)}>Võta õhendust</button>
    <br/> <br/>
    <div>Edward von Lõngus</div>
   
    <div>Uudiste kujundamine</div> 
    <button onClick={() => n2itaKontakt(9002002)}>Võta ühendust</button>
    <br/> <br/>
    <div>Kerli Kõiv</div>
   
    <div>Välisturgude spetsialist</div>
    <button onClick={() => n2itaKontakt(555123987)}>Võta ühendust</button>
    <br/> <br/>
    <div>Kelly Sildaru</div>
   
    <div>Püstolreporter</div>
    <button onClick={() => n2itaKontakt(5148697)}>Võta ühendust</button> */}
    <br/> <br/>
    { kontakt !== "" && <div>Tema kontakt :{kontakt}</div>}

    </div>
  )
}

export default Meist