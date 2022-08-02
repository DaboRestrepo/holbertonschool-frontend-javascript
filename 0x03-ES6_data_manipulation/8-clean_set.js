export default function cleanSet(set, startString) {
  if (startString && typeof startString === 'string') {
    const str = [];
    for (const elem of set) {
      if (elem.startsWith(startString)) {
        str.push(elem.slice(startString.length));
      }
    }
    return str.join('-');
  }
  return '';
}
