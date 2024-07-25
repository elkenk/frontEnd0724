import React from 'react'
import "./header.css"

function Header() {
  return (
    <div className="header">
       <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyAfRaAS6N2ug-N0E3WEj6wnTGSpcBoPhLw&s" alt="" />
  </div>
  )

}

export default Header