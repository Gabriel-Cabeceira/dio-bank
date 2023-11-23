import { DioAccount } from  './dioAccount';

class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    getLoan = (value: number): void => {
        if (this.validateStatus()){
            this.deposit(value);
        }
    }
}

export {CompanyAccount}