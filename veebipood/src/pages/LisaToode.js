import React, { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa toode!")
  const nimiRef = useRef();
 // function lisa () {}   = sama asi mis järgmine

 const lisa = () => {
  if (nimiRef.current.value === "") {
    muudaSonum("Tühja nimetusega ei saa toodet lisada!");
  } 
     else {muudaSonum("Sisestatud: " + nimiRef.current.value);
  }

  // const lisa = () => {
  //   if (nimiRef.current.value === "") {
  //     muudaSonum("Tühja nimetusega ei saa toodet lisada!");
  //      return: => lõpetab funktsiooni
  //   } 
  //    muudaSonum("Sisestatud: " + nimiRef.current.value);
  //   

  
 }

  return (

    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br/>
      <input ref={nimiRef} type="text"/> <br/>
      <button onClick={lisa}>Sisesta</button> <br/>
      </div>
  )
}


export default LisaToode