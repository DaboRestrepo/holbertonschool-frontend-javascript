interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let Student1: Student = {
  firstName: "Juan",
  lastName: "Rosales",
  age: 30,
  location: "Colombia",
}

let Student2: Student = {
  firstName: "Rosa",
  lastName: "Restrepo",
  age: 29,
  location: "Cuba",
}
const studentsList = [Student1, Student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((elem) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = elem.firstName;
  cellLocation.textContent = elem.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
