import React, {useState} from 'react'

function Numbrid() {
    const [numbers, muudaNumbers] = useState(["4", "23", "7", "39", "19", "0", "9", "14", "135", "666", "1501"])
    const originaali = () => {
        muudaNumbers(["4", "23", "7", "39", "19", "0", "9", "14", "135", "666", "1501"])
      }
    const sorteeriKasvavalt = () => {
        numbers.sort((a, b) => a - b)
        muudaNumbers(numbers.slice())
      }
    
      const sorteeriKahanevalt = () => {
        numbers.sort((a, b) => b - a)
        muudaNumbers(numbers.slice())
     }
     const sorteeriEsimeneNum = () => {
        numbers.sort((a,b) =>a[0].localeCompare(b[0]));
        muudaNumbers(numbers.slice());
        
      }
     //const sorteeriEsimeneNum = () => {
    //    numbers.sort((a, b) => a.toString().localeCompare(b.toString()))
    // }
    const sorteeriViimaneNum = () => {
        numbers.sort((a, b) =>a[a.length - 1].localeCompare(b[b.length - 1]));
        muudaNumbers(numbers.slice());
    // const sorteeriViimaneNum = () => {
      //  numbers.sort((b, a) => b.toString().localeCompare(a.toString()))
     }
     const filtreeriSuuremKui8 = () => {
        const vastus = numbers.filter(e=> e > 8)
        muudaNumbers(vastus)
     }
     const filtreeriAlla10 = () => {
        const vastus = numbers.filter(e=> e<10)
        muudaNumbers(vastus)
     }
     const filtreeriPaarisArvud = () => {
        const vastus = numbers.filter(e=> e%2 === 0)
        muudaNumbers(vastus)
     }
    const filtreeriPaaritudArvud = () => {
        const vastus = numbers.filter(e=> e%2 !==0)
        muudaNumbers(vastus)
     }
     const filtreeri1gaAlgavad = () => {
        const vastus = numbers.filter(e=> e.startsWith("1"))
        muudaNumbers(vastus)
     }
     const filtreeriSis3 = () => {
        const vastus = numbers.filter(e=> e.includes("3"))
        muudaNumbers(vastus)
     }
    
    return (
    <div>
        <button onClick={originaali}>Originaali</button>
        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
        <button onClick={sorteeriEsimeneNum}>Sorteeri esimese num. järgi</button>
        <button onClick={sorteeriViimaneNum}>Sorteeri viimase num. järgi</button>
<br></br>
        <button onClick={filtreeriSuuremKui8}>Suuremad kui 8</button>
        <button onClick={filtreeriAlla10}>Väiksemad kui 10</button>
        <button onClick={filtreeriPaarisArvud}>Paaris arvud</button>
        <button onClick={filtreeriPaaritudArvud}>Paaritud arvud</button>
        <button onClick={filtreeri1gaAlgavad}>Algab nr 1ga</button>
        <button onClick={filtreeriSis3}>Sisaldab nr 3e</button>


        {numbers.map(numbers => <div>{numbers}</div>)}
    </div>
  )
}

export default Numbrid