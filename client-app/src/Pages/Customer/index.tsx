import React, {useState, ChangeEvent} from 'react';

//components
import MainGrid from '../../components/MainGrid/MainGrid';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import Table from '../components/Table/Table'
import CustomerRegisterForm from './RegisterForm/RegisterForm';
import {AiOutlineSearch} from 'react-icons/ai';
import {IoMdAddCircleOutline} from 'react-icons/io';


//css
import './Customer.css';


const Customer:React.FC = () => {

    const [customerName, setCustomerName] = useState('')
    const [modalOpened, setModalOpened] = useState(false);


    const costumerNameHandler = (e:ChangeEvent):void => {
        const value: string = (e.target as HTMLInputElement).value;

        setCustomerName(value);
    } 

    return(

        <>
            {modalOpened ? 
                <Modal Entity="cliente" onClose={() => setModalOpened(false)}>
                    <CustomerRegisterForm/>
                </Modal> : null
            }

            <MainGrid pageTitle="Clientes > Visualizar">

                <div className="customer-filtering">

                    <Input 
                        type="text" 
                        name="customer" 
                        placeholder="Nome" 
                        labelText="Nome do cliente" 
                        change={costumerNameHandler}
                        value={customerName}
                        customClass="mid-width"
                    />


                    <div className="buttons">
                        <Button customClass="btn-primary">
                            <AiOutlineSearch/>Consultar
                        </Button>

                        <Button customClass="btn-warning" click={() => setModalOpened(true)}>
                            <IoMdAddCircleOutline/>Novo
                        </Button>
                    </div>


                </div>

                <Table>
                    <thead>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gabriel Bueno</td>
                            <td>448.148.398.98</td>
                            <td>Avenida Benvenuto Bagnara, 321 - Jardim Zaíra - Mauá </td>
                            <td>11 99504-5397</td>
                            <td style={{display: "flex", justifyContent: "center"}}>
                                <Button customClass="btn-primary">Editar</Button>
                                <Button customClass="btn-danger">Deletar</Button>
                            </td>
                        </tr>

                        <tr>
                            <td>Gabriel Bueno</td>
                            <td>448.148.398.98</td>
                            <td>Avenida Benvenuto Bagnara, 321 - Jardim Zaíra - Mauá </td>
                            <td>11 99504-5397</td>
                            <td style={{display: "flex", justifyContent: "center"}}>
                                <Button customClass="btn-primary">Editar</Button>
                                <Button customClass="btn-danger">Deletar</Button>
                            </td>
                        </tr>

                        <tr>
                            <td>Gabriel Bueno</td>
                            <td>448.148.398.98</td>
                            <td>Avenida Benvenuto Bagnara, 321 - Jardim Zaíra - Mauá </td>
                            <td>11 99504-5397</td>
                            <td style={{display: "flex", justifyContent: "center"}}>
                                <Button customClass="btn-primary">Editar</Button>
                                <Button customClass="btn-danger">Deletar</Button>
                            </td>
                        </tr>

                        <tr>
                            <td>Gabriel Bueno</td>
                            <td>448.148.398.98</td>
                            <td>Avenida Benvenuto Bagnara, 321 - Jardim Zaíra - Mauá </td>
                            <td>11 99504-5397</td>
                            <td style={{display: "flex", justifyContent: "center"}}>
                                <Button customClass="btn-primary">Editar</Button>
                                <Button customClass="btn-danger">Deletar</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </MainGrid>
        </>
    )
}

export default Customer;