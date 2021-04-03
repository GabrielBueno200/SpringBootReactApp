import React, { Fragment, useState, useEffect } from 'react';
import { IWarning } from '../../../services/models/warnings';
import { AiOutlineClose as CloseButton} from 'react-icons/ai'; 
import './Warning.css';

const WarningComponent:React.FC<{warning:IWarning}> = ({warning}) => {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setIsVisible(true);
    }, [])
    
    const customClass = `warning-area ${warning.type.toLowerCase()}-warning`;
    
    return(
        isVisible ?

            <div className={customClass}>
                <span>{warning.message}</span>
                <CloseButton onClick={() => setIsVisible(false)}/>
            </div>
        : <Fragment/>
    )
}

export default WarningComponent;