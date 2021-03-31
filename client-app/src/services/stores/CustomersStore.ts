import {createContext} from 'react';
import {observable, computed, action} from 'mobx';
import {ICustomer, ICustomerForm} from '../models';
import agent from '../api/agent';

class CustomerStore {
    
    @observable customers = new Map();


    @action loadCustomers = async () => {

        try{
            const customers:ICustomer[] = await agent.Customers.findAll();

            customers.forEach((customer:ICustomer) => {
                this.customers.set(customer.id, customer);
            })

        } catch(err){
            console.log(err.response.data);
        }
    }


    @action saveCustomer = async (customer:ICustomerForm) => {

        try{
            const newCustomer:ICustomer = await agent.Customers.save(customer);

            this.customers.set(newCustomer.id, newCustomer);
        
        } catch(err){
            console.log(err.response.data);
        }

    }

}

export default createContext(new CustomerStore());