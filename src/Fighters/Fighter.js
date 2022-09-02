const MAX_LIFE = 100

class Fighter {
  constructor(name, x = 0, y = 0) {
    this.name = name;
    this.strength = 10;
    this.dexterity = 5;
    this.life = MAX_LIFE;
    this.image = './images/lion.svg';
    this.x = x
    this.y = y
    this.range = 1
    this.experience = 1000
  }


  /**
   * Launch the fight
   * @param {Object} defender 
   */
  fight(defender) {
    let attackPoints = this.getRandomInt(this.getDamage());
    let damages = Math.max(attackPoints - defender.getDefense(), 0)
    defender.life = Math.max(defender.life - damages, 0);
  }

  /**
   * Calculate the total attack capacity of the fighter
   * @returns Number
   */
  getDamage() {
    return this.strength * this.getLevel();
  }

  /**
   * Calculate the total defense capacity of the fighter
   * @returns Number
   */
  getDefense() {
    return this.dexterity * this.getLevel();
  }

  /**
   * Generate a random value between 1 and max
   * @param {*} max Number
   * @returns Number
   */
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  /**
   * Get the attacks distance for a fighters
   * @returns Number
   */
  getRange() {
    return this.range
  }

  /**
   * Allow to know if a fighter is still alive
   * @returns Boolean
   */
  isAlive() {
    return this.life > 0
  }

  /**
   * Update Fighter experience after a won fight
   * @param {*} exp Number
   */
  updateExp(exp) {
    this.experience += exp;
  }

  /**
   * Calcul the level of the fighters form his experience
   * @returns Number
   */
  getLevel() {
    return Math.ceil(this.experience / 1000);
  }
}
