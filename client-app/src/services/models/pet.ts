import { ICustomer } from './customer';

export interface IPet{
    name: string,
    breed: string,
    type: string,
    age: number,
    owner: ICustomer
}

export interface IPetForm{
    name: string,
    breed: string,
    type: string,
    age: number,
    cpf: string
}
