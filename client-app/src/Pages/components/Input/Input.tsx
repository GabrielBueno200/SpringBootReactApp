import React, {ChangeEvent} from 'react';
import './Input.css';

interface IProps{
    labelText:string,
    placeholder: string,
    name: string,
    type: string,
    change?: (e:ChangeEvent<HTMLInputElement>) => void
    value?: string,
    customClass?: string

}

const Input:React.FC<IProps> = ({labelText, placeholder, name, type, value, customClass, change}) =>
    <div className={`custom-field ${customClass}`}>
        <label htmlFor={name}>{labelText}</label>
        <input 
            onChange={(e: ChangeEvent<HTMLInputElement>) => change !== undefined ? change(e) : undefined}
            type={type} 
            name={name} 
            placeholder={placeholder}
        />
    </div>

export default Input;