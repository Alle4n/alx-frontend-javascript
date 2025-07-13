interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Allen',
  lastName: 'Najjuma',
  age: 22,
  location: 'Kampala',
};

const student2: Student = {
  firstName: 'Lynn',
  lastName: 'Ntege',
  age: 24,
  location: 'Mukono',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
table.border = '1';

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
