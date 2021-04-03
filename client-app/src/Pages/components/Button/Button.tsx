import React from 'react';
import './Button.css';

interface IProps{
    customClass: "btn-primary" | 'btn-danger' | 'btn-warning',
    click?: () => void,
    type?: "button" | "submit" | "reset" | undefined
}

const Button:React.FC<IProps> = ({customClass, click, children, type}) =>
    <button className={`btn ${customClass}`} 
            onClick={() => click ? click() : undefined }
            type={type} 
    >
        {children}
    </button>

export default Button;