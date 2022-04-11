class Centaur {
  constructor(params) {
    this.name = params.name;
    this.breed = params.type;
    this.stressLevel = 0;
    this.standing = true;
    this.cranky = false;
    this.layingDown = false;
  }

  shootBow() {
    this.stressLevel += 1;
    if (this.stressLevel > 2) {
      this.cranky = true;
      return 'NO!'
    }
    return 'Twang!!!';
  }

  run() {
    this.stressLevel += 1;
    if (this.stressLevel > 2) {
      this.cranky = true;
      return 'NO!'
    }
    return 'Clop clop clop clop!!!';
  }

  sleep() {
    if (this.standing) {
      return 'NO!'
    } else {
      this.cranky = false;
      this.stressLevel = 0;
      return 'ZZZZ';
    }
  }

  layDown() {
    this.layingDown = true;
    this.standing = false;
    this.stressLevel += 3;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.layingDown) {
      return 'Not while I\'m laying down!';
    }
    this.cranky = false;
  }
}

module.exports = Centaur;
