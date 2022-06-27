const mysql = require('mysql2');
require ('console.table');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'Root123',
  database: 'employee_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
  });

  db.promise().query('SELECT CONCAT(employee.first_name, " ", employee.last_name) AS name, role.title, department.name AS department FROM employee LEFT JOIN role on employee.role_id=role.id LEFT JOIN department on role.department_id = department.id').then (([dbData]) => console.table (dbData));

