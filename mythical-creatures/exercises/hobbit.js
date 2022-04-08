class Hobbit {
  constructor(params) {
    this.name = params.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
  }

  celebrateBirthday() {
    this.age += 1;
    this.adult = this.age > 32;
    this.old = this.age > 100;
  }

  getRing() {
    if (this.name === 'Frodo') {
      this.hasRing = true;
      return 'Here is the ring!';
    } else {
      return 'You can\'t have it!';
    }
  }
}

module.exports = Hobbit;
