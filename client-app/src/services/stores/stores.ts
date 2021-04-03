import { createContext, useContext } from 'react';
import CustomerStore from './CustomerStore';

export interface IStores {
  customerStore: CustomerStore;
}

export const StoresContext = createContext<IStores>({
    customerStore: new CustomerStore(),
});

export const useStore = () => useContext(StoresContext);