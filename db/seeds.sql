USE employee_db;

INSERT INTO department (name) VALUES ('sales'), ('marketing'), ('hr');
INSERT INTO role (title,salary,department_id) VALUES ('salesperson', 100000, 1), ('creative director', 75000, 2), ('human resources', 50000, 3), ('ceo', 200000, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('mary', 'leone', 4,NULL), ('marco', 'eadoe', 1, 1), ('simon', 'bates', 2,1), ('jo', 'jones', 3,1);

