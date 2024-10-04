export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this.amount = newAmount;
    if (typeof newAmount !== 'number') {
      throw new TypeError('length must be a number');
    }
  }

  get currency() {
    return this.currency;
  }

  set currency(newCurrency) {
    this.amount = newCurrency;
    if (typeof newCurrency !== 'number') {
      throw new TypeError('currency must be a currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
