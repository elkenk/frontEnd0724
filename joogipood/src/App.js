
import './App.css';
import{Link, Route, Routes} from "react-router-dom";
import Avaleht from './Pages/Avaleht';
import LisaJook from './Pages/LisaJook';
import HaldaJooke from './Pages/HaldaJooke';
import Jook from './Pages/Jook';

function App() {
  return (
    <div>
      <Link to="/">
      <button>Avalehele</button>
      </Link>
      <Link to="LisaJook">
      <button>Lisa jook</button>
      </Link>
      <Link to="/HaldaJooke">
      <button>Jookide haldamine</button>
      </Link>      
      <Routes>
        <Route path="/" exact element={<Avaleht/>}/>
        <Route path="/LisaJook" exact element={<LisaJook/>}/>
        <Route path="/HaldaJooke" exact element={<HaldaJooke/>}/>
        <Route path="/jook/:number" element={<Jook/>}/>
      </Routes>
    </div>
  );
}

export default App;
