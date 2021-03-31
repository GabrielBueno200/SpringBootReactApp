import React, {useState, ChangeEvent, useContext} from 'react';
import { useForm } from "react-hook-form";
import { observer } from 'mobx-react-lite';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import CustomerStoreContext from '../../../services/stores/CustomersStore';

import './RegisterForm.css';

//interfaces
import {ICustomerForm, ICustomer} from '../../../services/models';

const CustomerRegisterForm:React.FC = () => {

    const { register, handleSubmit, watch, errors } = useForm<ICustomerForm>();
    
    const customerStore = useContext(CustomerStoreContext);

    const { saveCustomer } = customerStore;

    const onSubmit = handleSubmit( (data:ICustomerForm) => {
        saveCustomer(data);
    });

    return (
        <form onSubmit={onSubmit}>

            <div className="customer_register_fields">

                <div className="column-1">
        
                    <div className="custom-field">
                        <label htmlFor="name">Nome completo:</label>
                        <input 
                            ref={register({required: true})} 
                            type="text"  
                            name="name" 
                            placeholder="Nome"
                        />
                        {errors.name && <span>Este campo é obrigatório</span>}
                    </div>

                    <div className="custom-field">
                        <label htmlFor="cpf">CPF:</label>
                        <input 
                            ref={register({required: true})} 
                            type="text"  name="cpf" 
                            placeholder="CPF"
                        />
                        {errors.cpf && <span>Este campo é obrigatório</span>}
                    </div>

                    <div className="custom-field">
                        <label htmlFor="phoneNumber">Telefone:</label>
                        <input 
                            ref={register({required: true})} 
                            type="text"  
                            name="phoneNumber" 
                            placeholder="Telefone"
                        />
                        {errors.phoneNumber && <span>Este campo é obrigatório</span>}
                    </div>

                </div>

                <div className="column-2">

                    <div className="street_field">

                        <div className="custom-field street">
                            <label htmlFor="street">Rua:</label>
                            <input 
                                ref={register({required: true})} 
                                type="text"  
                                name="street" 
                                placeholder="Rua"
                            />
                            {errors.cpf && <span>Este campo é obrigatório</span>}
                        </div>

                        <div className="custom-field number">
                            <label htmlFor="number">Nº:</label>
                            <input 
                                ref={register({required: true})} 
                                type="number"  name="number" 
                                placeholder="Nº"
                                style={{width: "30px", marginLeft: "5px"}}
                            />
                            {errors.number && <span>Este campo é obrigatório</span>}
                        </div>

                    </div>

                    <div className="custom-field">
                        <label htmlFor="neighbourhood">Bairro:</label>
                        <input 
                            ref={register({required: true})} 
                            type="text"  name="neighbourhood" 
                            placeholder="Bairro"
                        />
                        {errors.neighbourhood && <span>Este campo é obrigatório</span>}
                    </div>

                    <div className="custom-field">
                        <label htmlFor="city">Cidade:</label>
                        <input 
                            ref={register({required: true})} type="text"  
                            name="city" placeholder="Cidade"
                        />
                        {errors.cpf && <span>Este campo é obrigatório</span>}
                    </div>

                </div>

            </div>

            <Button customClass="btn-primary" type="submit">Enviar</Button>

        </form>
    )
}

export default observer(CustomerRegisterForm);