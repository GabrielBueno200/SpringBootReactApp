import { observable, computed, action, runInAction, makeObservable } from 'mobx';


export default class WarningStore{

    @observable warningAction: () => void = () => {}
    @observable warningVisible: boolean = false;

    constructor(){
        makeObservable(this);
    }

    @action setWarningVisible = (status:boolean) => {
        this.warningVisible = status;
    }

    @action setWarningAction = (action:() => void) => {
        this.warningAction = () => { action(); this.resetWarning()};
        this.setWarningVisible(true);
    }

    @action resetWarning = () => {
        this.warningAction = () => {};
        this.warningVisible = false;
    }

}