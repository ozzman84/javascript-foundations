var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    var makePersonStatue = new Statue(victim.name)
    this.statues.push(makePersonStatue);

    if (this.statues.length > 3) {
      var makeStatuePerson = new Person(this.statues[0].name);
      this.statues.shift();
      makeStatuePerson.mood = 'relieved';
      return makeStatuePerson;
    }
  }
}

module.exports = Medusa;
