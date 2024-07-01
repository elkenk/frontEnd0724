
import './App.css';
import{Link, Route, Routes} from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Kinkekaardid from './pages/Kinkekaardid';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';

function App() {
  return (
    <div className="App">
      <Link to="avaleht">
      <img className="pilt" src="https://loomakaitse.eu/wp-content/uploads/2021/03/shutterstock_662031211-scaled.jpg" alt="" />
      </Link> 
      <Link to="kinkekaardid">
      <button className="nupp">kinkekaardid</button>
      </Link> 
      <Link to="lisa-toode">
      <button className="nupp">Toodet lisama</button>
      </Link> 
      <Link to="seaded">
      <button className="nupp">Seaded</button>
      </Link> 
      <Routes>
        <Route path="avaleht" element={<Avaleht/>}/>
        <Route path="kinkekaardid" element={<Kinkekaardid/>}/>
        <Route path="lisa-toode" element={<LisaToode/>}/>
        <Route path="seaded" element={<Seaded/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
