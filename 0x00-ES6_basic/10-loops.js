export default function appendToEachArrayValue(array, appendString) {
  const str = [];
  for (const idx of array) {
    str.push(appendString + idx);
  }

  return str;
}
