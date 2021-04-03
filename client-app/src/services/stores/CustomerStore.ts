
import { observable, computed, action, runInAction, makeObservable } from 'mobx';
import { ICustomer, ICustomerForm } from '../models/customer';
import { IWarning } from '../models/warnings';

import agent from '../api/agent';

export default class CustomerStore {
    
    @observable customers = new Map();

    @observable customerSearchWarning:IWarning | null = null;

    @observable customerRegisteringWarning:IWarning | null = null;

    @observable customerEditingWarning:IWarning | null = null;

    @observable activeCustomerId: number = 0;

    constructor() {
        makeObservable(this);
    }


    @computed get activeCustomer():ICustomer | null{
        return this.customers.get(this.activeCustomerId);
    }

    @computed get loadedCustomers():ICustomer[] | null{
        return Array.from(this.customers.values());
    }

    @action fetchCustomers = async () => {

        try{
            const customers:ICustomer[] = await agent.Customers.findAll();

            runInAction(() => {
                customers.forEach((customer:ICustomer) => {
                    this.customers.set(customer.id, customer);
                })}
            )

        } catch(err){
            console.log(err.response.data);
        }
    }


    @action saveCustomer = async (customer:ICustomerForm) => {

        try{
            const newCustomer:ICustomer = await agent.Customers.save(customer);

            runInAction(() => {
                this.customers.set(newCustomer.id, newCustomer);

                this.customerRegisteringWarning = {
                    message: "Cadastrado com sucesso!",
                    type: 'Success'
                };
            }
    	);

        } catch(err){
            console.log(err.response.data);
        }

    }

    @action updateCustomer = async (customer:ICustomerForm) => {

        try{
            const updatedCustomer:ICustomer = await agent.Customers.updateUser(customer, this.activeCustomerId);

            runInAction(() => {
                this.customers.set(this.activeCustomerId, updatedCustomer);

                this.customerEditingWarning = {
                    message: "Editado com sucesso!",
                    type: 'Success'
                };
            });

        } catch(err){
            console.log(err.response.data);
        }
    }

    @action deleteCustomer = async (id: number) => {
     
        try {
            await agent.Customers.deleteById(id);

            runInAction(() => this.customers.delete(id));
        
        } catch(err){
            console.log(err.response.data);
        }
    }

    @action findCustomerByCpf = async (cpf: string) => {

        try {
            
            if(cpf.length > 0){

                const customers:ICustomer[] = await agent.Customers.findByCpf(cpf);

                runInAction(() => {
                    this.customerSearchWarning = null;
                    this.customers.clear();
                    customers.forEach((customer:ICustomer) => 
                        this.customers.set(customer.id, customer))
                });
            } else
                runInAction(() => this.fetchCustomers());

        } catch(err){
            runInAction(() =>
                this.customerSearchWarning = {
                    message: err.response.data.message,
                    type: 'Error' 
            });
        }
    }

    @action cleanWarnings = () => {
        this.customerRegisteringWarning = null;
        this.customerEditingWarning = null;
    }

    @action setCustomer = (id:number) => {
        this.activeCustomerId = id;
    }



}
