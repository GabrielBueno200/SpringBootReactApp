import { createContext, useContext } from 'react';
import CustomerStore from './CustomerStore';
import PetStore from './PetStore';
import WarningStore from './WarningStore';


export interface IStores {
  customerStore: CustomerStore,
  warningStore: WarningStore,
  petStore: PetStore
}

export const StoresContext = createContext<IStores>({
    customerStore: new CustomerStore(),
    warningStore: new WarningStore(),
    petStore: new PetStore()
});

export const useStore = () => useContext(StoresContext);