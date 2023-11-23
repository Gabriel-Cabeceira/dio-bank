import {CompanyAccount} from './class/companyAccount';
import {PersonalAccount} from './class/personalAccount';
import { SpecialAccount } from './class/specialAccount';


console.log('Personal account tests');

const personalAccount: PersonalAccount = new PersonalAccount(123456, 'Aline Mendes', 2);
console.log('Personal account created');
console.log(personalAccount);

console.log('\n Balance just after creating account');
personalAccount.getBalance();

personalAccount.deposit(5000);
console.log('\n Made a deposit of $5000.00')

console.log('\n Balance just after deposit')
personalAccount.getBalance();

console.log('\n Made a withdraw of $450.25');
personalAccount.withdraw(450.25);

console.log('\n Balance just after withdraw')
personalAccount.getBalance();

console.log('\n Trying to make a withdraw higher than balance')
personalAccount.withdraw(10000);

console.log('\n Balance just after trying to withdraw a higher value')
personalAccount.getBalance();

console.log('--------------- // ---------------')

console.log('Company account tests');

const companyAccount: CompanyAccount = new CompanyAccount('GC Inc.', 3);
console.log('Company account created');
console.log(companyAccount);

console.log('\n Balance just after creating account');
companyAccount.getBalance();

companyAccount.deposit(5000);
console.log('\n Made a deposit of $5000.00')

console.log('\n Balance just after deposit')
companyAccount.getBalance();

console.log('\n Balance just after get loan $25000')
companyAccount.getLoan(25000);
companyAccount.getBalance();

console.log('\n Made a withdraw of $10000');
companyAccount.withdraw(10000);

console.log('\n Balance just after withdraw')
companyAccount.getBalance();

console.log('\n Trying to make a withdraw higher than balance')
companyAccount.withdraw(50000);

console.log('\n Balance just after trying to withdraw a higher value')
companyAccount.getBalance();

console.log('--------------- // ---------------')


console.log('Special account tests');

const specialAccount: SpecialAccount = new SpecialAccount('Somebody', 777777);
console.log('Special account created');
console.log(specialAccount);

console.log('\n Balance just after creating account');
specialAccount.getBalance();

specialAccount.deposit(5000);
console.log('\n Made a deposit of $5000.00')

console.log('\n Balance just after deposit')
specialAccount.getBalance();

console.log('\n Made a withdraw of $2500');
specialAccount.withdraw(2500);

console.log('\n Balance just after withdraw')
specialAccount.getBalance();

console.log('\n Trying to make a withdraw higher than balance')
specialAccount.withdraw(50000);

console.log('\n Balance just after trying to withdraw a higher value')
specialAccount.getBalance();