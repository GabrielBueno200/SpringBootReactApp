import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import { ICustomer, ICustomerForm } from '../models';


axios.defaults.baseURL = 'http://localhost:8080/api/';


const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody) 
};

const Customers = {
    save: (customer:ICustomerForm):Promise<ICustomer> => requests.post('/customers/', customer),
    findAll: (): Promise<ICustomer[]> => requests.get('/customers')
}

export default {
    Customers
}
