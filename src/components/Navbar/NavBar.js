import React from 'react';
import {RiQuestionLine} from 'react-icons/ri'
import {IoMdSettings} from 'react-icons/io'
import {IoPodiumOutline} from 'react-icons/io5'
import './Navbar.css'

const NavBar = () => {
    return <nav className='nav-wrapper'>
        <div className='nav-help'>
            <RiQuestionLine className='nav-icon' />
        </div>
        <div className='nav-title'>
            <h1>WORDLE</h1>
        </div>
        <div className='nav-options'>
            <IoPodiumOutline className='nav-icon'/>
            <IoMdSettings className='nav-icon'/>
        </div>
    </nav>;
};

export default NavBar;
