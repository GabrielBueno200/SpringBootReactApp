import React from 'react';
import {MdPets} from 'react-icons/md';
import {IoIosArrowBack} from 'react-icons/io';
import './Header.css';

const Header:React.FC = () => 
    <div className="page-header">
        <div className="brand">
            <h4><MdPets/>  Clínica Veterinária</h4>
        </div>
        <div className="page-informations">
            <h3><IoIosArrowBack/>Bem-vindo!</h3>
        </div>
    </div>

export default Header;
