

const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, speciaization: 'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, speciaization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, speciaization: 'Java' },
    //... More employee records can be added here
];

// Function to display all employees

function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.speciaization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}


    
// function to calculate total salary
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// function to display the employees in HR department
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// function to display employee by id
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}

// function to find employee by specialization
function findEmployeeBySpeciaization(employeeSpeciaization) 
{
    const specializationEmployees = employees.filter(employee => employee.speciaization == employeeSpeciaization);
    const jsEmployeesDisplay = specializationEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.speciaization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = jsEmployeesDisplay;
}