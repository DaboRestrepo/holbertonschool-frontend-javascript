export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((index) => index.location === city)
    .map((student) => {
      const grad = newGrades
        .filter((index) => index.studentId === student.id)
        .map((idx) => idx.grade)[0];
      const grade = grad || 'N/A';
      return { ...student, grade };
    });
}
