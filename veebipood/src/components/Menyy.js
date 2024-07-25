import React from 'react'
import { Link } from "react-router-dom"

function Menyy() {
  return (
    <div>
          <Link to="/">
      <img className="pilt" src="https://loomakaitse.eu/wp-content/uploads/2021/03/shutterstock_662031211-scaled.jpg" alt="" />
      </Link> 
      <Link to="/kinkekaardid">
      <button className="nupp">kinkekaardid</button>
      </Link> 
      <Link to="/lisa-toode">
      <button className="nupp">Toodet lisama</button>
      </Link> 
      <Link to="/seaded">
      <button className="nupp">Seaded</button>
      </Link> 
      <Link to="/Esindused">
      <button className="nupp">Esindused</button>
      </Link> 
      <Link to="/Ostukorv">
      <button className="nupp">Ostukorv</button>
      </Link> 
      <Link to="/hinnad">
      <button className="nupp">Hinnad</button>
      </Link> 
      <Link to="/Teenused">
      <button className="nupp">Teenused</button>
      </Link> 
      
      <Link to="/tootajad">
      <button className="nupp">Tootajad</button>
      </Link> 
      <Link to="/tooted">
      <button className="nupp">Tooted</button>
      </Link> 
      <br></br>
      <Link to="/Halda-tooted">
      <button className="nupp">Halda Tooted</button>
      </Link> 
      <Link to="/Halda-tootajad">
      <button className="nupp">Halda Tootajad</button>
      </Link> 
      <Link to="/Halda-hinnad">
      <button className="nupp">Halda Hinnad</button>
      </Link>
      <Link to="/Halda-Esindused">
      <button className="nupp">Halda Esindused</button>
      </Link> 
      <Link to="/Halda-teenused">
      <button className="nupp">Halda Teenused</button>
      </Link> 
      <Link to="shops">
      <button className="nupp">Shops</button>
      </Link>
    </div>
  )
}

export default Menyy