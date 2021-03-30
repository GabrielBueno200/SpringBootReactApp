import React from 'react';

import SubMenu from './SubMenu/SubMenu';
import {Link} from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';

import './Navbar.css'

const Navbar:React.FC = () => 
    <div className="side-navbar">
        <ul className="navbar-items">
            <li className="nav-item"><Link to="/"><AiOutlineHome/> Home</Link></li>
            <SubMenu/>
        </ul>
    </div>

export default Navbar;