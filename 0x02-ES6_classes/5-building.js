export default class Building {
  constructor(sqft) {
      if (new.target === Building) {
          throw new Error('Building is an abstract class and cannot be instantiated directly.');
      }
      this._sqft = sqft;
  }

  // Getter for the sqft attribute
  get sqft() {
      return this._sqft;
  }

  // Method to be overridden by subclasses
  evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
