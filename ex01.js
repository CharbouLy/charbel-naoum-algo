function isUnique(str) {
  return ![...str].some((value, index, array) => {
    return array.indexOf(value) !== index;
  });
}