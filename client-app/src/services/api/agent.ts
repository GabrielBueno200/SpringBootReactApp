import axios, {AxiosResponse} from 'axios';
import { ICustomer, ICustomerForm } from '../models/customer';


axios.defaults.baseURL = 'http://localhost:8080/api/';


const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody) 
};

const Customers = {
    save: (customer:ICustomerForm): Promise<ICustomer> => requests.post('/customers', customer),
    findAll: (): Promise<ICustomer[]> => requests.get('/customers'),
    findByCpf: (cpf: string): Promise<ICustomer[]> => requests.get(`/customers/cpf/${cpf}`),
    updateUser: (customer:ICustomerForm, id:number): Promise<ICustomer> => requests.put(`/customers/${id}`, customer),
    deleteById: (id:number) => requests.del(`/customers/${id}`)
}

const Pets = {
    findOwnerByCPF: (cpf: string): Promise<string> => requests.get(`/pets/owner/${cpf}`)
}

export default {
    Customers,
    Pets
}
