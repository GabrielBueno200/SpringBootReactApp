import React from 'react';
import { useStore } from '../../../services/stores/stores';
import Button from '../Button/Button';
import Modal from '../Modal/Modal'
import './ConfirmDialog.css';


const ConfirmDialog:React.FC = ({children}) => {

    const { warningStore } = useStore();

    const {warningAction, resetWarning} = warningStore;

    return(
        <Modal onClose={() => resetWarning()} title="Aviso">
            {children}

            <div className="confirm-buttons">
                <Button customClass="btn-primary" click={() => warningAction()}>Confirmar</Button>
                <Button customClass="btn-warning" click={() => resetWarning()}>Cancelar</Button>
            </div>

        </Modal>
    )
    
}

export default ConfirmDialog;