import React, {useState, ChangeEvent} from 'react';
import { useForm } from "react-hook-form";
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import './RegisterForm.css';

//interfaces
import { IPetForm } from '../../../services/models/pet';

const CustomerRegisterForm:React.FC = () => {

    const { register, handleSubmit, watch, errors } = useForm<IPetForm>();

    const onSubmit = handleSubmit( (data:IPetForm) => {

        console.log(data)
        /*const newCustomer:ICustomer = {
            name: data.name,
            cpf: data.cpf,
            phoneNumber: data.phoneNumber
            address: {
                street: data.street,
                number: data.number
            }*/
        });

    const [ownerCpf, setOwnerCpf] = useState('');

    return (
        <form onSubmit={onSubmit}>

            <div className="pet_register_fields">

                <div className="column-1">
                    <div className="custom-field">
                        <label htmlFor="cpf">CPF do dono:</label>
                        <input 
                            ref={register({required: true})}
                            onChange={(e:ChangeEvent) => setOwnerCpf((e.target as HTMLInputElement).value)} 
                            type="text"  name="cpf" 
                            placeholder="CPF"
                        />
                        {errors.cpf && <span>Este campo é obrigatório</span>}
                    </div>

                    <div className="custom-field">
                        <label htmlFor="owner">Nome do dono:</label>
                        <input 
                            type="text"  name="owner" 
                            placeholder="Dono"
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
                        />
                        {errors.breed && <span>Este campo é obrigatório</span>}
                    </div>

                    <div className="custom-field">
                        <label htmlFor="type">Tipo:</label>
                        <select 
                            name="type"
                            ref={register({required: true})} 
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
                        />
                        {errors.breed && <span>Este campo é obrigatório</span>}
                    </div>
                </div>


            </div>

            <Button customClass="btn-primary" type="submit">Enviar</Button>

        </form>
    )
}

export default CustomerRegisterForm;