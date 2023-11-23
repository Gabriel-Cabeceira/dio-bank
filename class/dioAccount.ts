export abstract class DioAccount {
    // Declare atributs of user account. This is the main Class of an account
    private readonly name: string;
    private readonly accountNumber: number;  // readonly set the atributs to not be modified, its just possible to read it`s value, even in the object
    private balance: number;
    status: boolean;

    // Constructor class of the class
    constructor(name: string, accountNumer: number) {
        this.name = name;
        this.accountNumber = accountNumer;
        this.balance = 0;
        this.status = true;
    }

    protected setBalance = (value: number): void => {
        this.balance = this.balance + value;
    }


    // Class that handles deposits
    deposit = (value: number): void => {
        if (this.validateStatus()){
            this.balance = this.balance + value;
        }
    }

    // Class that handles withdraws
    withdraw = (value: number): void => {
        if (this.validateStatus() && this.balance >= value && this.balance > 0){
            this.balance = this.balance - value;
        } else {
            console.log('Saldo insuficiente');
        }
    }

    getBalance = (): void => {
        console.log(this.balance);
    }

    validateStatus = (): boolean => {
       if (this.status){
            return this.status
       }

       throw new Error('Falha na operação, verifique se a conta está ativa.');
    }
}