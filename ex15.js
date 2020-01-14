function anagramsSort(array) {
  const obj = {};
  array.map((value, index, array) => {
    console.log(value, index, array);
    console.log([...value].sort().join(''));
  });
}

anagramsSort(['salut', 'tic', 'coucou', 'tulas', 'oucouc', 'cit']);