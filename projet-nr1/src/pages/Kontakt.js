import React, { useState } from 'react'

function Kontakt() {
    const [aadress, määrasAadress] = useState("Tallinn")
    const [telefon, määrasTelefon] = useState("5512345")
    const [email, määrasEmail] = useState("bla@baa.com")
    const [ingliseKeelne, määraIngliseKeelne] = useState("ei")

    const ingliseks = () => {
        määrasAadress("London")
        määrasTelefon("123654789")
        määrasEmail("london@london.com")
        määraIngliseKeelne("jah")

    }
  return (
    <div>
        <div>{ aadress }</div>
        <div>{ telefon }</div>
        <div>{ email }</div>
        <button onClick={ingliseks}>Muuda inglise keelseks</button>
        { ingliseKeelne ==="jah" && <div>Leht on inglise keelne</div>}
    </div>
  )
}

export default Kontakt