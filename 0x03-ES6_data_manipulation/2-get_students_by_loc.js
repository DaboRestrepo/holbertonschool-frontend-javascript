export default function getStudentsByLocation(arr, city) {
  return arr.filter((index) => index.location === city);
}
