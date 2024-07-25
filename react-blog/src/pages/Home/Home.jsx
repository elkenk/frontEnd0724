import React from 'react'
import "./home.css"
import Header from '../../Header/Header'
import Posts from '../../Posts/Posts'
import Sidebar from '../../Sidebar/Sidebar'

function Home() {
  return (
    <div>
    <Header/>
    <div className="home">
        <Posts/>
        <Sidebar/>
        
        
        
    </div>
    </div>
  )
}

export default Home