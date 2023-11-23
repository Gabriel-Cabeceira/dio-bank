import { DioAccount } from './dioAccount';

class SpecialAccount extends DioAccount {
    
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (value: number): void => {
        if (this.validateStatus()){
            this.setBalance(value + 10);
        }
    }
}

export {SpecialAccount}