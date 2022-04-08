class Magician {
  constructor(params) {
    this.name = "The Great " + params.name;
    this.assistant = params.assistant;
    this.favoriteAccessory = params.clothing || 'top hat';
    this.confidencePercentage = 10;
  }

  performIncantation(spell) {
    return spell.toUpperCase() + '!';
  }

  performTrick() {
    this.confidencePercentage += 10

    if(this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT';
    } else if (this.favoriteAccessory === 'cape') {
      return 'PULL DOVE FROM SLEEVE'
    }
  }

  performShowStopper() {
    if(this.confidencePercentage > 109 && this.assistant) {
      return 'WOW! The magician totally just sawed that person in half!'
    } else {
      return 'Oh no, this trick is not ready!'
    }
  }
}

module.exports = Magician;
