class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(name, isMorning) {
    if (isMorning === true) {
      return (`Good morning, ${name}!`);
    } else {
      return (`Hello, ${name}!`);
    }
  }
  findBook(inputTitle) {
    if (this.library.shelves.fantasy[0].title === inputTitle) {
      this.library.shelves.fantasy.splice(0, 1);
      return `Yes, we have ${inputTitle}`;
    } else {
      return `Sorry, we do not have ${inputTitle}`;
    }
  }
  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * 0.25);
  }
}

module.exports = Librarian;