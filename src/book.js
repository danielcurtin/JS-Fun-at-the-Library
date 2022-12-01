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
  var reviews = array;
  reviews.push(review);
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}