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
  if (genre === "fantasy") {
    for (var i = 0; i < library.shelves.fantasy.length + 1; i++) {
      if (library.shelves.fantasy[0] !== undefined && book === library.shelves.fantasy[i].title) {
        library.shelves.fantasy.splice(library.shelves.fantasy.indexOf(book), 1);
        return `You have now checked out ${book} from the ${library.name}`;
      } else {
        return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
      };
    };
  } else if (genre === "nonFiction") {
    for (var i = 0; i < library.shelves.nonFiction.length + 1; i++) {
      if (library.shelves.nonFiction[0] !== undefined && book === library.shelves.nonFiction[i].title) {
        library.shelves.nonFiction.splice(library.shelves.nonFiction.indexOf(book), 1);
        return `You have now checked out ${book} from the ${library.name}`;
      } else {
        return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
      };
    };
  } else {
    for (var i = 0; i < library.shelves.fiction.length + 1; i++) {
      if (library.shelves.fiction[0] !== undefined && book === library.shelves.fiction[i].title) {
        library.shelves.fiction.splice(library.shelves.fiction.indexOf(book), 1);
        return `You have now checked out ${book} from the ${library.name}`;
      } else {
        return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
      };
    };
  };
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};