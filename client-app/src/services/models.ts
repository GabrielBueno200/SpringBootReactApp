export interface IAddress{
    street: string,
    number: number,
    neighbourhood: string,
    city: string
}

export interface ICustomer{
    name: string
    address: IAddress,
    cpf: string,
    phoneNumber: string
}

export interface IPet{
    name: string,
    breed: string,
    type: string,
    age: number,
    owner: ICustomer
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

export interface IPetForm{
    name: string,
    breed: string,
    type: string,
    age: number,
    cpf: string
}
