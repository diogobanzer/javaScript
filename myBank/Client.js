export class Client {
  _name;
  _cpf;

  get name() {
    return (this.name = _name);
  }

  get cpf() {
    return (this.cpf = _cpf);
  }

  constructor(name, cpf) {
    this._name = name;
    this._cpf = cpf;
  }
}
