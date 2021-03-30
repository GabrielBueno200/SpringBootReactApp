import React, {Fragment, useState, useEffect, Children} from 'react';
import {useHistory, Link} from 'react-router-dom';

//COMPONENTS

//ICONS
import {FiPlus} from 'react-icons/fi';

//CSS
import './Modal.css';


interface IProps{
    Entity: string,
    onClose: () => void,
    onSubmit?: () => void
}


const Modal:React.FC<IProps> = ({Entity, onClose, onSubmit, children}) => {


    return (
        <Fragment>

            <div className="modal">

                <h5 className="modal-title">Novo {Entity}</h5>

    

                    <div className="modal-content">
                        {children}
                    </div>

                    <div className="modal-buttons">

                    </div>


            </div>
            
            <div className="modal-bg" onClick={onClose}></div>

        </Fragment>
    );
}

export default Modal;