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
  return title.length * 20;
};

function writeBook(title, character, genre) {
  var book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  };
  return book;
};

function editBook(book) {
  book.pageCount = book.pageCount - book.pageCount/4;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}