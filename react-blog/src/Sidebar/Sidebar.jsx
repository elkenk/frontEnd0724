import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>ABOUT ME</span>
            <img className='pilt' src="https://ee2.pigugroup.eu/colours/101/910/31/10191031/pilt-lovi-2-x-50-x-50-3c573_reference.jpg" alt="" />
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className="sidebarList">
            <li className='sidebarListItem'>Life</li>
            <li className='sidebarListItem'>Music</li>
            <li className='sidebarListItem'>Style</li>
            <li className='sidebarListItem'>Sport</li>
            <li className='sidebarListItem'>Tech</li>
            <li className='sidebarListItem'>Cinema</li>
        </ul>
</div>
         <div className='sidebarItem'>
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className='sidebarSocial'>
                <i className='sidebarIcon fab fa-square-facebook'></i>
                <i className='sidebarIcon fab fa-twitter'></i>
                <i className='sidebarIcon fab fa-pinterest'></i>
                <i className='sidebarIcon fab fa-instagram'></i>
                
            </div>
         </div>
    </div>
  )
}
