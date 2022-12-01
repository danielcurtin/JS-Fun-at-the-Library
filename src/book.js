function createTitle(title) {
  return title = `The ${title}`;
};

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  };
  return mainCharacter;
};

function saveReview(review, array) {
  if (array.includes(review) === false) {
    array.push(review);
  };
};

function calculatePageCount(title) {
  var calc = title.length;
  return calc * 20;
};

function writeBook(title, character, genre) {
  var pageCount = calculatePageCount(title);
  var book = {
    title: title,
    mainCharacter: character,
    pageCount: pageCount,
    genre: genre
  };
  return book;
};

function editBook(book) {
  var calc = book.pageCount - book.pageCount/4;
  book.pageCount = calc;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}