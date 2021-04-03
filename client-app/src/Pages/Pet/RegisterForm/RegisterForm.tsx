import React, {useState, ChangeEvent} from 'react';
import { useForm } from "react-hook-form";
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { observer } from 'mobx-react-lite';

import './RegisterForm.css';

//interfaces
import { IPetForm } from '../../../services/models/pet';
import { useStore } from '../../../services/stores/stores';

const PetRegisterForm:React.FC = () => {

    const { register, handleSubmit, watch, errors } = useForm<IPetForm>();

    const { petStore } = useStore();

    const { activeOwner, setOwner } = petStore;

    const onSubmit = handleSubmit( (data:IPetForm) => {

        console.log(data)
    });

    const [ownerCpf, setOwnerCpf] = useState('');


    const ownerCpfHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        
        setOwnerCpf(e.target.value);
    }

    return (
        <form onSubmit={onSubmit}>

            <div className="pet_register_fields">

                <div className="column-1">

                    <div style={{display: 'flex', alignItems: 'flex-end'}}>
                        <div className="custom-field">
                            <label htmlFor="cpf">CPF do dono:</label>
                            <input 
                                ref={register({required: true})}
                                onChange={ownerCpfHandler} 
                                type="text"  name="cpf" 
                                placeholder="CPF"
                            />
                            {errors.cpf && <span>Este campo é obrigatório</span>}
                        </div>

                        <button 
                            type="button"
                            onClick={() => setOwner(ownerCpf)} 
                            className="btn-primary"
                            style={{height: '2em', marginLeft: '5px', borderRadius: '5px'}}>
                                Pesquisar
                        </button>

                    </div>

                    <div className="custom-field">
                        <label htmlFor="owner">Nome do dono:</label>
                        <input 
                            type="text"  name="owner" 
                            placeholder="Dono"
                            value={activeOwner}
                            readOnly={true}
                        />
                    </div>


                    <div className="custom-field">
                        <label htmlFor="name">Nome do animal:</label>
                        <input 
                            ref={register({required: true})} 
                            type="text"  
                            name="name" 
                            placeholder="Nome"
                            disabled={activeOwner.length === 0}
                        />
                        {errors.name && <span>Este campo é obrigatório</span>}
                    </div>
                </div>


                <div className="column-2">
                    <div className="custom-field">
                        <label htmlFor="breed">Raça:</label>
                        <input 
                            ref={register({required: true})} 
                            type="text"  
                            name="breed" 
                            placeholder="Raça"
                            disabled={activeOwner.length === 0}
                        />
                        {errors.breed && <span>Este campo é obrigatório</span>}
                    </div>

                    <div className="custom-field">
                        <label htmlFor="type">Tipo:</label>
                        <select 
                            name="type"
                            ref={register({required: true})} 
                            disabled={activeOwner.length === 0}
                        >
                            <option value="dog">Cachorro</option>
                            <option value="cat">Gato</option>
                        </select>
    
                        {errors.type && <span>Este campo é obrigatório</span>}
                    </div>

                    <div className="custom-field">
                        <label htmlFor="age">Idade:</label>
                        <input 
                            ref={register({required: true})} 
                            type="text"  
                            name="age" 
                            placeholder="Idade"
                            disabled={activeOwner.length === 0}
                        />
                        {errors.breed && <span>Este campo é obrigatório</span>}
                    </div>
                </div>


            </div>

            <Button customClass="btn-primary" type="submit">Enviar</Button>

        </form>
    )
}

export default observer(PetRegisterForm);