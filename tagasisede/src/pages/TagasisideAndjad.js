import React, {useRef, useState} from 'react'
import andjateFail from "../nimed.json"

function TagasisideAndjad() {
    const [andjad, uuendaAndjad] = useState(andjateFail)
    
    const filtreeriM = () => {
        const vastus = andjad.filter(element => element.startsWith("M"))
        uuendaAndjad(vastus)
    }
    const filterSixLetters = () => {
        const vastus = andjad.filter(element => element.length === 6)
        uuendaAndjad(vastus)
    }
    const filtrerEndingY = () => {
        const vastus = andjad.filter(element => element.endsWith("y"))
        uuendaAndjad(vastus)
    }
    const sortZA = () => {
        andjad.sort()
        andjad.reverse()
        uuendaAndjad(andjad.slice())
    }
    const insertEST = () => {
        const vastus = andjad.map(element => "EST" + element)
        uuendaAndjad(vastus)
    }
    const kustuta = (index) => {
        andjad.splice(index, 1)
        uuendaAndjad(andjad.slice)
    }
    const andjaRef = useRef()

    const lisa = () => {
        andjad.push(andjaRef.current.value)
        uuendaAndjad(andjad.slice())
    }
    return (
    <div>
        <div>Kuva tagasiside andate arv: {andjad.length}tk</div>
        <button onClick={filtreeriM}>M-ga algavad</button>
        <button onClick={filterSixLetters}>6 tähelised</button>
        <button onClick={filtrerEndingY}>Y-ga lõppevad</button>
        <button onClick={sortZA}>Sorteeri Z-A</button>
        <button onClick={insertEST}>Lisa iga nime ette EST</button>
        {andjad.map((element, index) =>
        <div key={element, index}>
            {element} <button onClick={() => kustuta(index)}>Kustuta</button>
            </div>)}
        <label>Lisa uus nimi</label> <br/>
        <input ref={andjaRef} type="text"/> <br/>
        <button onClick={lisa}>Lisa</button>

    </div>
  )
}

export default TagasisideAndjad