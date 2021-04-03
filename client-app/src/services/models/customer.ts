import { IAddress } from './address';
import { IPet } from './pet';

export interface ICustomer{
    id?: number,
    name: string
    address: IAddress,
    cpf: string,
    phoneNumber: string,
    pets?: IPet[]
}

export interface ICustomerForm{
    name: string
    street: string,
    number: number,
    neighbourhood: string,
    city: string
    cpf: string,
    phoneNumber: string
}