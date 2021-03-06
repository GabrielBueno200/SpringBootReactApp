import React, {useState, Fragment} from 'react';

//components
import MainGrid from '../../components/MainGrid/MainGrid';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import Table from '../components/Table/Table';
import PetRegisterForm from './RegisterForm/RegisterForm';
import { observer } from 'mobx-react-lite';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdAddCircleOutline } from 'react-icons/io';


//css
import './Pet.css';
import { useStore } from '../../services/stores/stores';


const Pet:React.FC = observer(() => {

    const { petStore } = useStore();
    
    const [petName, setPetName] = useState('')
    const [modalOpened, setModalOpened] = useState(false);



    const petNameHandler = (e:React.ChangeEvent):void => {
        const value: string = (e.target as HTMLInputElement).value;

        setPetName(value);
    } 

    return(
        <Fragment>


            {modalOpened ? 
                <Modal title="animal" onClose={() => setModalOpened(false)}>
                    <PetRegisterForm/>
                </Modal> 
            : null}


            <MainGrid pageTitle="Clientes > Pet">

                <div className="customer-filtering">

                    <Input 
                        type="text" 
                        name="pet" 
                        placeholder="Nome" 
                        labelText="Nome do animal" 
                        change={petNameHandler}
                        value={petName}
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
                        <th>Idade</th>
                        <th>Ra??a</th>
                        <th>Tipo</th>
                        <th>Sexo</th>
                        <th>Dono</th>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Billy</td>
                            <td>1,5 anos</td>
                            <td>Pastor alem??o</td>
                            <td>Cachorro</td>
                            <td>Macho</td>
                            <td>Gabriel Bueno</td>
                        </tr>

                        <tr>
                            <td>Dina</td>
                            <td>2 anos</td>
                            <td>Siam??s</td>
                            <td>Gato</td>
                            <td>F??mea</td>
                            <td>Gabriel Bueno</td>
                        </tr>

                    </tbody>
                </Table>

            </MainGrid>

        </Fragment>
    )
})

export default Pet;