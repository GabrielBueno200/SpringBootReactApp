import React, {useState, Fragment, useEffect} from 'react';
import { observer } from 'mobx-react-lite';

//components
import MainGrid from '../../components/MainGrid/MainGrid';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import Table from '../components/Table/Table'
import CustomerRegisterForm from './Forms/RegisterForm/RegisterForm';
import CustomerEditForm from './Forms/EditForm/EditForm';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { useStore } from '../../services/stores/stores';

//css
import './Customer.css';
import { ICustomer } from '../../services/models/customer';


const Customer:React.FC = observer(() => {

    const { customerStore } = useStore();
    const { fetchCustomers } = customerStore;

    useEffect(() => {
        fetchCustomers()
    }, [fetchCustomers]);

    const [customerCPF, setCustomerCPF] = useState('')
    const [modalOpened, setModalOpened] = useState(false);
    const [userAction, setUserAction] = useState<'registering' | 'editing' | null>(null);

    const modalHandler = (userActionToggler:() => void) => {
        userActionToggler();
        setModalOpened(true);
    }


    const costumerCPFHandler = (e:React.ChangeEvent) => {
        const value: string = (e.target as HTMLInputElement).value;

        if (!value.length)
            fetchCustomers();

        setCustomerCPF(value);
    }

    const searchCustomerHandler = () => {
        customerStore.findCustomerByCpf(customerCPF);
    }

    const modalCloserHandler = () => {
        setModalOpened(false);
        customerStore.cleanWarnings();
    }

    return(
        <Fragment>

            {modalOpened ? 

                <Modal title={`${userAction === 'registering' ? 'Cadastro' : 'Edição'} Cliente`} onClose={() => modalCloserHandler()}>
                        {userAction === 'registering' ? <CustomerRegisterForm/>
                        : userAction === 'editing' ? <CustomerEditForm/> 
                        : null}
                    </Modal>
                
            : null}

            <MainGrid pageTitle="Clientes > Visualizar">

                <div className="customer-filtering">

                    <Input 
                        type="text" 
                        name="customer" 
                        placeholder="CPF" 
                        labelText="CPF do cliente" 
                        change={costumerCPFHandler}
                        value={customerCPF}
                        customClass="mid-width"
                    />


                    <div className="buttons">
                        <Button customClass="btn-primary" click={() => searchCustomerHandler()}>
                            <AiOutlineSearch/>Consultar
                        </Button>

                        <Button customClass="btn-warning" click={() => modalHandler(() => setUserAction('registering'))}>
                            <IoMdAddCircleOutline/>Novo
                        </Button>
                    </div>


                </div>

                <div className="customer-data">

                    {
                    
                        customerStore.customerSearchWarning != null ?

                            <span>{customerStore.customerSearchWarning.message}</span>

                        :
                        <Table>
                            <thead>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Endereço</th>
                                <th>Telefone</th>
                                <th>Ações</th>
                            </thead>
                            
                            <tbody>
                                {

                                    customerStore.loadedCustomers!.map((customer:ICustomer) => {

                                        const {street, number, neighbourhood, city} = customer.address;

                                        return (
                                            <tr key={customer.id}>
                                                <td>{customer.name}</td>
                                                <td>{customer.cpf}</td>
                                                <td>{`${street}, ${number} - ${neighbourhood} - ${city}`}</td>
                                                <td>{customer.phoneNumber}</td>
                                                <td style={{display: "flex", justifyContent: "center"}}>
                                                    <Button click={() => modalHandler(() => {setUserAction('editing'); customerStore.setCustomer(customer.id!)})} 
                                                            customClass="btn-primary" >
                                                        Editar
                                                    </Button>
                                                    <Button click={() => customerStore.deleteCustomer(customer.id!)} customClass="btn-danger">Deletar</Button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }

                            </tbody>

                        </Table>
                    }
                    
                </div>

            </MainGrid>

        </Fragment>
    )
})

export default Customer;