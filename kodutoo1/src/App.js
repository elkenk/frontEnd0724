//import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom"
import Tabel from './pages/Tabel';
import Seaded from './pages/Seaded';
import Books from './pages/Books';
import Numbrid from './pages/Numbrid';

function App() {
  return (
    <div className="App">
      <Link to="Pealeht">
      <button className='nupp'>Pealeht</button>
      </Link>
      <Link to= "/Seaded">
      <button>Seadetesse</button>
      </Link>
      <Link to= "/Books">
      <button>Raamatud</button>
      </Link>
      <Link to= "/Numbrid">
      <button>Numbrid</button>
      </Link>
      <span className='jutt'>See jutt on sinine</span>
      <span className='roh'>See jutt on roheline</span>
      <img className='pilt' src="https://assets.whichcar.com.au/image/upload/s--uP3CJUjP--/ar_2.304921968787515,c_fill,f_auto,q_auto:good/c_scale,w_2048/v1/archive/motor/2017/10/16/119104/2002-BMW-E46-M3.jpg" alt="" />
      <Link to="Tabel">
      <button className='tab'>Tabel</button>
      </Link>
      <Routes>
        <Route path="Seaded" element= {<Seaded />} />
        
        <Route path="Tabel" element={ <Tabel />} />

        <Route path="Books" element={<Books/>}/>

        <Route path="Numbrid" element={<Numbrid/>}/>

      </Routes>
      <iframe width="420px" height="315px"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
    </div>
  ); 
}

export default App;
