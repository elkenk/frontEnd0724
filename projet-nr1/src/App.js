//import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom"
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import Months from './pages/Months';
import Animals from './pages/Animals';
import Words from './pages/Words';
import { useState } from 'react';
import { useRef } from 'react';
import {ToastContainer, toast} from "react-toastify"


function App() {
  const [sisselogitud, muudaSisseLogitud] = useState("ei")
  const [sonum, muudaSonum] =useState("")
  const kasutajaNimiRef = useRef()
  const paroolRef = useRef()

  const logiSisse = () => {
    if (paroolRef.current.value.length < 8){
      toast.error("Liiga lühike !")
      return;
    }
    if (paroolRef.current.value.toLowerCase === paroolRef.current.value) {
      toast.error("peab sisaldama suurt tähte")
      return;
    }
    if (paroolRef.current.value.toUpperCase === paroolRef.current.value) {
      toast.error("peab sisaldama väikest tähte")
      return;
    }
    if (paroolRef.current.value.includes("%") === false) {
      toast.error("peab sisaldama protsenti")
      return;
    }
    if (paroolRef.current.value === "123") {
    muudaSisseLogitud("jah")
    muudaSonum(kasutajaNimiRef.current.value + ", Oled sisse logitud")
    toast.success("Läks õnneks !")
    return;
  } 
    toast.error("Ei vedanud !")
    muudaSonum("Vale parool")
  }


  return (
    <div className="App">
      <div>{sonum}</div>
      { sisselogitud === "ei" &&
      <div>
      <label>Kasutajanimi</label><br/>
      <input ref={kasutajaNimiRef} type="text" /> <br/>
      <label>Parool</label> <br/>
      <input ref={paroolRef} type="password" /> <br/>
      </div> }

      { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse  </button> }
      { sisselogitud === "jah" && <button onClick={() => muudaSisseLogitud("ei")}>Logi välja  </button> }

      <div>--SIIN ON VARASEM KODUTÖÖ--</div>

      <Link to="/">
      <button>Avaleht</button>
      </Link>
      <Link to="/Kontakt">
      <button>Kontakt</button>
      </Link>
      <Link to="/Meist">
      <button>Meist</button>
      </Link>
      <Link to="/Seaded">
      <button>Seadetesse</button>
      </Link>
      <Link to="/Months">
      <button>Months</button>
      </Link>
      <Link to="/Animals">
      <button>Animals</button>
      </Link>
      <Link to="/Words">
      <button>Words</button>
      </Link>

      <Routes>
        <Route path="" element={<Avaleht/>}/>
        <Route path="Kontakt" element={<Kontakt/>}/>
        <Route path="Meist" element={<Meist/>}/>
        <Route path="Seaded" element={<Seaded/>}/>
        <Route path="Months" element={<Months/>} />
        <Route path="Animals" element={<Animals/>} />
        <Route path="Words" element={<Words/>} />
      </Routes>

        <ToastContainer/>
    </div>
  );
}

export default App;
