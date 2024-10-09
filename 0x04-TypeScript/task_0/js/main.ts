interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Kareem",
  lastName: "Hany",
  age: 20,
  location: "Egypt"
} 

const student2: Student = {
  firstName: "Ahmed",
  lastName: "Mohamed",
  age: 32,
  location: "USA"
} 

const studentsList: Array<Student> = [student1, student2];


export const displayTable = (studentsList: Array<Student>): void => {
  const table = document.createElement('table');
  const row = document.createElement('tr');
  table.insertAdjacentElement('beforeend', row);
  row.insertAdjacentHTML('beforeend', '<th>firstName</th>');
  row.insertAdjacentHTML('beforeend', '<th>lastName</th>');
  row.insertAdjacentHTML('beforeend', '<th>age</th>');
  row.insertAdjacentHTML('beforeend', '<th>location</th>');
  
  for (const student of studentsList) {
    const dataRow = document.createElement('tr');
    dataRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    dataRow.insertAdjacentHTML('beforeend', `<td>${student.lastName}</td>`);
    dataRow.insertAdjacentHTML('beforeend', `<td>${student.age}</td>`);
    dataRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);

    table.insertAdjacentElement('beforeend', dataRow);
  }
  document.body.insertAdjacentElement('beforeend', table);
}


displayTable(studentsList);


/* Another Solution
const table = document.createElement("table");

studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

document.body.appendChild(table);
*/
