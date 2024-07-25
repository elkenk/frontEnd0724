
import './App.css';
import{ Route, Routes} from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Kinkekaardid from './pages/Kinkekaardid';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import Esindused from './pages/Esindused';
import Ostukorv from './pages/Ostukorv';
import Menyy from './components/Menyy';
import NotFound from './pages/NotFound';
import {useState} from "react"
import Tooted from './pages/Tooted';
import Tootajad from './pages/Tootajad';
import Hinnad from './pages/Hinnad';
import HaldaEsindused from './pages/HaldaEsindused';
import HaldaHinnad from './pages/HaldaHinnad';
import HaldaTootajad from './pages/HaldaTootajad';
import HaldaTooted from './pages/HaldaTooted';
import YksEsindus from './pages/YksEsindus';
import YksTootaja from './pages/YksTootaja';
import YksHind from './pages/YksHind';
import YksToode from './pages/YksToode';
import MuudaEsindus from './pages/MuudaEsindus';
import MuudaToode from './pages/MuudaToode';
import MuudaHind from './pages/MuudaHind';
import MuudaTootaja from './pages/MuudaTootaja';
import Teenused from './pages/Teenused';
import MuudaTeenus from './pages/MuudaTeenus';
import YksTeenus from './pages/YksTeenus';
import HaldaTeenused from './pages/HaldaTeenused';
import Shops from './pages/Shops';


function App() {
  const [theme, muudaTheme] = useState(localStorage.getItem("teema") || "light")
  const themeDark = () => {
    muudaTheme("dark")
    localStorage.setItem("teema", "dark")
  }
  const themeLight = () => {
    muudaTheme("light")
    localStorage.setItem("teema", "light")
  }

  return (
    <div className={theme === "dark" ? "App-dark" : "App"}>
      <Menyy />
      {theme === "light" &&<button onClick={themeDark}>Dark</button>}
      {theme ==="dark" &&<button onClick={themeLight}>Light</button>}
            
      <Routes>
        <Route path="" element={<Avaleht/>}/>
        <Route path="kinkekaardid" element={<Kinkekaardid/>}/>
        <Route path="lisa-toode" element={<LisaToode/>}/>
        <Route path="seaded" element={<Seaded/>}/>
        <Route path="Esindused" element={<Esindused/>}/>
        <Route path="Ostukorv" element={<Ostukorv/>}/>
        <Route path="hinnad" element={<Hinnad/>}/>
        <Route path="tootajad" element={<Tootajad/>}/>
        <Route path="tooted" element={<Tooted/>}/>

        <Route path="shops" element={<Shops/>}/>
        
        <Route path="*" element={<NotFound/>}/>
        
        <Route path="Halda-Esindused" element={<HaldaEsindused/>}/>
        <Route path="Halda-hinnad" element={<HaldaHinnad/>}/>
        <Route path="Halda-tootajad" element={<HaldaTootajad/>}/>
        <Route path="Halda-tooted" element={<HaldaTooted/>}/>

        <Route path="esindus/:index" element={<YksEsindus/>}/>
        <Route path="tootaja" element={<YksTootaja/>}/>
        <Route path="hind/:index" element={<YksHind/>}/>
        <Route path="toode" element={<YksToode/>}/>

        <Route path="muuda-esindus/:index" element={<MuudaEsindus/>}/>
        <Route path="muuda-tootaja/:index" element={<MuudaTootaja/>}/>
        <Route path="muuda-hind/:index" element={<MuudaHind/>}/>
        <Route path="muuda-toode/:index" element={<MuudaToode/>}/>

        <Route path="teenused" element={<Teenused/>}/>
        <Route path="Halda-teenused" element={<HaldaTeenused/>}/>
        <Route path="Teenus/:index" element={<YksTeenus/>}/>
        <Route path="Muuda-teenused/:index" element={<MuudaTeenus/>}/>


       
      </Routes>
    </div>
  );
}

export default App;
