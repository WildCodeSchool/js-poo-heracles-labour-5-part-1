class Hero extends Fighter {
  constructor(name, x, y) {
    super(name, x, y)
    this.weapon = null;
    this.shield = null;
    this.strength = 20;
    this.dexterity = 6;
    this.image = './images/heracles.svg';
  }

  /**
  * Calculate the total attack capacity of the fighter
  * @returns Number
  */
  getDamage() {
    return (this.strength + (this.weapon ? this.weapon.damage : 0)) * this.getLevel();
  }

  /**
   * Calculate the total defense capacity of the fighter
   * @returns Number
   */
  getDefense() {
    return (this.dexterity + (this.shield ? this.shield.protection : 0)) * this.getLevel();
  }

  /**
   * Get the attacks distance for a fighters
   * @returns Number
   */
  getRange() {
    return this.range + (this.weapon ? this.weapon.range : 0)
  }
}
