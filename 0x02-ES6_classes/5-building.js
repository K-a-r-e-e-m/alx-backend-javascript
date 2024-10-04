export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    // Check if the constructor is subclass not Building class
    // and the evacuationWarningMessage is not defiend in the subclass
    if (this.constructor !== Building
        && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = newSqft;
  }

  // Method to be overridden in subclasses
  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
