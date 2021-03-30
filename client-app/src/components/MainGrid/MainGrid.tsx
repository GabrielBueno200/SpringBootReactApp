import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MainGrid.css';

interface IProps{
    pageTitle: string
}


const MainGrid:React.FC<IProps> = ({children, pageTitle}) => {

    return (

        <div className="main-grid">

            <Header/>

            <Navbar/>

            <div className="container">
                <h1>{pageTitle}</h1>
                {children}
            </div>

            <Footer/>

        </div>
    )
}

export default MainGrid;