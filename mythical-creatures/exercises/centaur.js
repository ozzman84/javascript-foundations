class Centaur {
  constructor({ name, type }) {
    this.name = name;
    this.breed = type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.actionCount = 0; // Tracks the number of actions (run/shoot)
  }

  shootBow() {
    if (this.cranky || this.layingDown) return 'NO!';
    this.incrementActionCount();
    return 'Twang!!!';
  }

  run() {
    if (this.cranky || this.layingDown) return 'NO!';
    this.incrementActionCount();
    return 'Clop clop clop clop!!!';
  }

  sleep() {
    if (this.standing) return 'NO!';
    this.cranky = false;
    this.actionCount = 0;
    return 'ZZZZ';
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.layingDown) return "Not while I'm laying down!";
    this.cranky = false;
    this.actionCount = 0;
  }

  incrementActionCount() {
    this.actionCount++;
    if (this.actionCount >= 3) this.cranky = true;
  }
}

module.exports = Centaur;