import { createContext, useContext } from 'react';
import CustomerStore from './CustomerStore';
import WarningStore from './WarningStore';


export interface IStores {
  customerStore: CustomerStore,
  warningStore: WarningStore
}

export const StoresContext = createContext<IStores>({
    customerStore: new CustomerStore(),
    warningStore: new WarningStore()
});

export const useStore = () => useContext(StoresContext);