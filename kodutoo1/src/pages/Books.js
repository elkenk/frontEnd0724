import React, {useState} from 'react'


function Books() {
    const [books, muudaBooks] = useState (["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Faust", "Joomahullu Päevaraamat"]);
    const originaali = () => {
        muudaBooks(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Faust", "Joomahullu Päevaraamat"])
      }
      const sorteeriAZ =( ) => {
        books.sort((a,b) =>a.localeCompare(b));
        muudaBooks(books.slice()); 
    }
   const sorteeriZA = () => {
      books.sort((a,b) =>b.localeCompare(a));
      muudaBooks(books.slice());
    }
    const sorteeriTahtedeArvKasv = () => {
      books.sort((a,b) => a.length -b.length);
      muudaBooks(books.slice());
    }
    const sorteeriTeineTahtAZ = () => {
        books.sort((a,b) =>a[1].localeCompare(b[1]));
        muudaBooks(books.slice());
      }
      const sorteeriSonadeArv = () => {
        books.sort((a,b) => {
            const wordCountA = a.split(" ").length
            const wordCountB = b.split(" ").length
            return wordCountA - wordCountB
        })
        muudaBooks(books.slice())
      }
      const sorteeriEelviimaneTaht = () => {
        books.sort((a,b) => {
            const eelviimaneA = a.length > 1 ? a[a.length - 2]:""
            const eelviimaneB = b.length > 1 ? b[b.length - 2]:""
            return eelviimaneA.localeCompare(eelviimaneB)
        })
        muudaBooks(books.slice())   
      }
      const filtreeriThegaAlgavad = () => {
        const vastus = books.filter(e => e.startsWith("The"));
        muudaBooks(vastus); 
      }
      const filtreeriAndiSisaldavad = () => {
        const vastus = books.filter(e => e.includes("and"));
        muudaBooks(vastus);
      }
      const filtreeriVah10Tahelised = () => {
        const vastus = books.filter(e => e.length >= 10);
        muudaBooks(vastus);
      }
      const filtreeriVah7Tahelised = () => {
        const vastus = books.filter(e => e.length <= 7);
        muudaBooks(vastus);
      }
      const filtreeriVah3Sona = () => {
        const vastus =books.filter(e => e.split(" ").length >= 3)
        muudaBooks(vastus)
      }
     



  return (
    <div>
        <button onClick={originaali}>Originaali</button>
              <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
              <button onClick={sorteeriZA}>Sorteeri Z-A</button>
              <button onClick={sorteeriTahtedeArvKasv}>Sorteeri tähed kasvavalt</button>
              <button onClick={sorteeriTeineTahtAZ}>Sorteeri teine täht A-Z</button>
              <button onClick={sorteeriSonadeArv}>Sorteeri sõnade arvu järgi</button>
              <button onClick={sorteeriEelviimaneTaht}>Sorteeri eelviimase tähe järgi</button>
              <br></br>
              <button onClick={filtreeriThegaAlgavad}>Filtreeri The-ga algavad</button>
              <button onClick={filtreeriAndiSisaldavad}>Filtreeri and-i sisaldavad</button>
              <button onClick={filtreeriVah10Tahelised}>Filtreeri vähemalt 10 tähelised</button>
              <button onClick={filtreeriVah7Tahelised}>Filtreeri kui on alla 7 tähe</button>
                <button onClick={filtreeriVah3Sona}>Filtreeri vähemalt kolme sõnalised</button>


        {books.map(books => <div>{books}</div>)}
    </div>
  )
}

export default Books