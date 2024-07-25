import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from "react"

function Hobused() {
  const[kursus, uuendaKursus] = useState("Valimata")

  return (
    <div>
        <Link to="/">
        <button>Tagasi</button>
        </Link>
        <button className="nupp" onClick={() => uuendaKursus("Udemy")}>Udemy</button>
        <button className="nupp" onClick={() => uuendaKursus("Coursera")}>Coursera</button>
        <button className="nupp" onClick={() => uuendaKursus("Codecademy")}>Codecademy</button>
        <button className="nupp" onClick={() => uuendaKursus("Udacity")}>Udacity</button>

        {kursus === "Udemy" && <div>Siin on kirjeldus (loend) Udemy.com läbitud kursustest</div>}
        {kursus === "Coursera" && <div>Siin on kirjeldus (loend) Coursera.org läbitud kursustest</div>}
        {kursus === "Codecademy" && <div>Siin on kirjeldus (loend) Codecademy.com läbitud kursustest</div>}
        {kursus === "Udacity" && <div>Siin on kirjeldus (loend) Udacity.com läbitud kursustest</div>}
   
    </div>

    
    
  )
}


export default Hobused
