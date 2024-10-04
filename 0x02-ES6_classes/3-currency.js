export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
    if (typeof newCode !== 'string') {
      throw new TypeError('code must be a string');
    }
  }
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
    if (typeof newName !== 'string') {
      throw new TypeError('name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`
  }
}
