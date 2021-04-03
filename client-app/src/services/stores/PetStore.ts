import { observable, computed, action, runInAction, makeObservable } from 'mobx';
import agent from '../api/agent';
import { ICustomer } from '../models/customer';
import { IPet } from '../models/pet';

export default class PetStore{

    @observable activeOwner:string = '';

    constructor(){
        makeObservable(this);
    }

    @action setOwner = async (cpf:string) => {

        try{
            const customerName:string = await agent.Pets.findOwnerByCPF(cpf);

            runInAction(() => {
                this.activeOwner = customerName;
            });

        } catch(err){
            runInAction(() => this.activeOwner = '');
            console.log(err.response.data);
        }
    }
}

