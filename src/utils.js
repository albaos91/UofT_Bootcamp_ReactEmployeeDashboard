const getUsers = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    if (res.ok) {
      const jsonRes = await res.json();
      return jsonRes;
    }
  } catch (error) {
    console.log(error);
  }
};

const assignRandomDepartment = () => {
  const departments = [
    'Engineering',
    'Sales',
    'Marketing',
    'Design',
    'Finance',
    'Accounting'
  ];

  return departments[Math.floor(Math.random() * departments.length)];
};

const assignRole = department => {
  switch (department) {
    case 'Engineering':
      return 'Software Engineer';
    case 'Accounting':
      return 'Accountant';
    case 'Sales':
      return 'Sales Consultant';
    case 'Marketing':
      return 'Communication Manager';
    case 'Finance':
      return 'Actuary';
    default:
      return 'Product Designer';
  }
};

const searchEmployeeByName = (employeeList, targetName) => {
  if (targetName === '') return employeeList;

  return employeeList.filter(emp => {
    if (emp.name.toLowerCase().includes(targetName.toLowerCase())) {
      return emp;
    }
  });
};

const searchEmpByNameAndDepartment = (
  employeeList,
  targetName,
  targetDepartment
) => {
  employeeList.filter(emp => {
    if (
      emp.department.toLowerCase() === targetDepartment.toLowerCase() &&
      emp.name.toLowerCase().includes(targetName.toLowerCase())
    ) {
      return emp;
    }
  });
};

export {
  getUsers,
  assignRandomDepartment,
  assignRole,
  searchEmployeeByName,
  searchEmpByNameAndDepartment
};
