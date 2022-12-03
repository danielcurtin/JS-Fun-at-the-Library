function createLibrary (name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      nonFiction: [],
      fiction: []
    },
  };
  return library;
};

function addBook (library, book) {
  var gen = book.genre;
  library.shelves[gen].push(book);
}

function checkoutBook (library, book, genre) {
  if (library.shelves[genre].length > 0) {
    for (var i = 0; i < library.shelves[genre].length; i++) {
      if (genre === library.shelves[genre][i].genre && book === library.shelves[genre][i].title) {
        library.shelves[genre].splice(library.shelves[genre].indexOf(library.shelves[genre][i]), 1);
        return `You have now checked out ${book} from the ${library.name}`;
      } else {
        return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
      };
    };
  } else {
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
  };
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};