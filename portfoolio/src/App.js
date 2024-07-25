//import logo from './logo.svg';
import './App.css';
import { Route, Routes} from "react-router-dom"
import Reklaam from './pages/Reklaam';
import Hobused from './pages/Hobused';
import IPA from './pages/IPA';
import NavBar from './components/NavBar';


function App() {

  return (
    <div>
      
      <img className="main-picture" src="https://m.media-amazon.com/images/I/61bSKe21IlL._AC_UF894,1000_QL80_.jpg" alt="" />
      <div className="rectangle"></div>
    <div className="navigation-pictures">

      <NavBar/>
   
   <Routes>
    <Route path="" element={<NavBar/>}/>
    <Route path="Reklaam" element={<Reklaam/>}/>
    <Route path="Hobused" element={<Hobused/>}/>
    <Route path="IPA" element={<IPA/>}/>
   </Routes>
    </div>
    <iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
</iframe>
<a className="instagram-button" href="http://www.instagram.com/jee">
<img src="instagram.png" alt="" />
<span>Instagram</span>
</a>
    </div>
  );
}

export default App;
