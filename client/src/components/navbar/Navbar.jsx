import React from 'react'
import {  NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const currentUser = false;
    return (
        <nav className='top'>
            <div className="topLeft">
                <i className="topLeftIcon fa-brands fa-twitter-square "></i>
                <i className="topLeftIcon fa-brands fa-instagram-square "></i>
                <i className="topLeftIcon fa-brands fa-facebook-square "></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <NavLink to="/">HOME</NavLink>
                    </li>
                    <li className="topListItem">
                        <NavLink to="/about">ABOUT</NavLink>
                    </li>
                    <li className="topListItem">
                        <NavLink to="/contact">CONTACT</NavLink>
                    </li>
                    <li className="topListItem">
                        <NavLink to="/write">WRITE</NavLink>
                    </li>
                    <li className="topListItem">
                        <NavLink to="/login">{currentUser && 'LOGOUT'}</NavLink>
                    </li>
                </ul>
            </div>
             <div className="topRight">
                {currentUser ? <img src="https://picsum.photos/3840" alt="" className='topRightImg' /> :
                    
                    <ul className='topList'>
                        <li className='topListItem'>
                            <NavLink to="/login">LOGIN</NavLink>
                        </li>
                        <li className='topListItem'>
                            <NavLink to="/register">REGISTER</NavLink>  
                        </li>
                    </ul>
                }
                    <i className="topSearchIcon fa-solid fa-magnifying-glass "></i>
            </div>
        </nav>
  ) 
}

export default Navbar