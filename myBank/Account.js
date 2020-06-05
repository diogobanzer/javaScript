import { Client } from './Client.js';

export class Account {
  _client;

  set client(newClient) {
    if (newClient instanceof Client) {
      this._client = newClient;
    }
  }

  get client() {
    return this._client;
  }
  agency;

  _balance = 0;
  get balance() {
    return this._balance;
  }

  static totalAccounts = 0;
  constructor(client, agency) {
    this.client - client;
    this.agency = agency;
    Account.totalAccounts += 1;
  }

  withdrawal(value) {
    if (this._balance >= value) {
      this._balance -= value;
      return value;
    }
  }

  deposit(value) {
    if (value <= 0) {
      return;
    } else {
      this._balance += value;
    }
    return value;
  }

  transfer(value, account) {
    const valueWithdrawal = this.withdrawal(value);
    account.deposit(valueWithdrawal);
  }
}
