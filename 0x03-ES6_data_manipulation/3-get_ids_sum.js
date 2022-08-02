export default function getStudentIdsSum(arr) {
  return arr.reduce((sum, index) => sum + index.id, 0);
}
