let employees = [
  {
    name: "Rahul",
    age: 25,
    department: "IT",
    salary: 50000,
  },
  {
    name: "Amit",
    age: 24,
    department: "Sales",
    salary: 30000,
  },
  {
    name: "Rohan",
    age: 25,
    department: "Management",
    salary: 40000,
  },
  {
    name: "Kabir",
    age: 25,
    department: "IT",
    salary: 50000,
  },
  {
    name: "Abir",
    age: 25,
    department: "IT",
    salary: 300000,
  },
];

//print all data
console.log("all Employees data: ");
console.table(employees);

// print each element
console.log("particular employee Information:");
let data = employees.forEach((item) => {
  console.table(item);
});

// print employee whose name starts with 'R'
let someEmployee = employees.some((item) => {
  if (item.name[0] == "R") {
    console.log(item.name);
  }
});

// Sorting employees by salary in descending order

employees.sort((a, b) => a.salary - b.salary);
console.log("Employees sorted by salary in descending order:");
console.table(employees);

//sorting by name

employees.sort((a, b) => a.name.localeCompare(b.name));
console.log("Employees sorted by name:");
console.log(employees);

// Filter employees by department

let filteredEmployees = employees.filter((item) => item.department == "IT");
console.log("Employees in IT department:");
console.log(filteredEmployees);

//total salary
let totalSalary = employees.reduce((acc, current) => acc + current.salary, 0);
console.log("Total salary of all employees:", totalSalary);
