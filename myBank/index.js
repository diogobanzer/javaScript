import { Account } from './Account.js';
import { Client } from './Client.js';

const accountClient1 = new Account('Obama', 888888);
accountClient1.client = new Client('Obama', 11122233309);
accountClient1.deposit(1000);
accountClient1.withdrawal(200);

const accountClient2 = new Account('Trump', 999999);
accountClient2.client = new Client('Trump', 11122233308);
accountClient1.transfer(500, accountClient2);

console.log('\n\n Total Bank Accounts: ' + Account.totalAccounts + '\n');
console.log(accountClient1);
console.log(accountClient2);
