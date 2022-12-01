function shelfBook (obj, array) {
  if (array.length < 3) {
    if (obj.genre === `sciFi`) {
      array.unshift(obj);
    };
  };
};

function unshelfBook (toRemove, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].title === toRemove) {
      array.splice(array.indexOf(array[i]), 1);
      return array;
    };
  };
};

function listTitles (array) {
  var list = "";
  for (var i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) !== array.length - 1) {
      list += array[i].title + ', ';
    } else {
      list += array[i].title;
    }
  }
  return list;
};

function searchShelf (shelf, title) {
  var loop = true;
  for (var i = 0; i < shelf.length; i++) {
    var elem = "";
    elem += shelf[i].title;
    if (elem.includes(title)) {
      return true;
    } else {
      loop = false;
    }
  }
  if (loop === false) {
    return loop;
  };
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};