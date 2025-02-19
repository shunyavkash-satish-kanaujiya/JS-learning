let employeeData = JSON.parse(localStorage.getItem("employeeData")) || [];
const tableBody = document.querySelector("#employeeTable tbody");
employeeData.forEach((employee) => {
  const newRow = tableBody.insertRow();
  newRow.insertCell(0).textContent = employee.name;
  newRow.insertCell(1).textContent = employee.age;
  newRow.insertCell(2).textContent = employee.department;
  newRow.insertCell(3).textContent = employee.salary;
});
document.getElementById("up").addEventListener("click", () => {
  employeeData.sort((a, b) => a.salary - b.salary);
  tableBody.innerHTML = "";
  employeeData.forEach((employee) => {
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = employee.name;
    newRow.insertCell(1).textContent = employee.age;
    newRow.insertCell(2).textContent = employee.department;
    newRow.insertCell(3).textContent = employee.salary;
  });
});
document.getElementById("down").addEventListener("click", () => {
  employeeData.sort((a, b) => b.salary - a.salary);
  tableBody.innerHTML = "";
  employeeData.forEach((employee) => {
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = employee.name;
    newRow.insertCell(1).textContent = employee.age;
    newRow.insertCell(2).textContent = employee.department;
    newRow.insertCell(3).textContent = employee.salary;
  });
});

document.getElementById("nameUp").addEventListener("click", () => {
  employeeData.sort((a, b) => a.name.localeCompare(b.name));
  tableBody.innerHTML = "";
  employeeData.forEach((employee) => {
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = employee.name;
    newRow.insertCell(1).textContent = employee.age;
    newRow.insertCell(2).textContent = employee.department;
    newRow.insertCell(3).textContent = employee.salary;
  });
});

document.getElementById("nameDown").addEventListener("click", () => {
  employeeData.sort((a, b) => b.name.localeCompare(a.name));
  tableBody.innerHTML = "";
  employeeData.forEach((employee) => {
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = employee.name;
    newRow.insertCell(1).textContent = employee.age;
    newRow.insertCell(2).textContent = employee.department;
    newRow.insertCell(3).textContent = employee.salary;
  });
});

//search
document.getElementById("search").addEventListener("input", () => {
  const searchValue = document.getElementById("search").value.toLowerCase();
  const filteredData = employeeData.filter((employee) =>
    employee.name.toLowerCase().includes(searchValue)
  );
  tableBody.innerHTML = "";
  filteredData.forEach((employee) => {
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = employee.name;
    newRow.insertCell(1).textContent = employee.age;
    newRow.insertCell(2).textContent = employee.department;
    newRow.insertCell(3).textContent = employee.salary;
  });
});
const addData = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const department = document.getElementById("department").value;
  const salary = document.getElementById("salary").value;

  // Create a new row in the table
  const tableBody = document.querySelector("#employeeTable tbody");
  const newRow = tableBody.insertRow();

  // Insert data into the row

  newRow.insertCell(0).textContent = name;
  newRow.insertCell(1).textContent = age;
  newRow.insertCell(2).textContent = department;
  newRow.insertCell(3).textContent = salary;

  // Create an object for the employee data
  const employee = {
    name,
    age,
    department,
    salary,
  };

  // Add the employee data to the array
  employeeData.push(employee);
  localStorage.setItem("employeeData", JSON.stringify(employeeData));
  alert("Employee added successfully!");

  // Clear the form
  document.getElementById("employeeForm").reset();
};
