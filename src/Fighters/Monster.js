class Monster extends Fighter {
  constructor(name, x, y) {
    super(name, x, y)
    this.weapon = null;
    this.shield = null;
    this.experience = 500;
  }
}
