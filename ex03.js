function isAnagram(str1, str2) {
  return [...str1].sort().join('') === [...str2].sort().join('');
}