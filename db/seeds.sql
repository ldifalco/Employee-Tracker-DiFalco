INSERT INTO department (name)
VALUES ("Tech Support"),
("Customer Service"),
("IT");

INSERT INTO role (title, salary, department_id)
VALUES ("Technical Support Specialist", 30000, 1),
("Tech Support Supervisor", 50000, 1),
("Customer Service Agent", 20000, 2),
("Customer Service Lead", 40000, 2),
("Server Admin", 80000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, NULL),
("Jon", "Snow", 1, 1),
("Geralt", "Ofrivia", 2, NULL),
("Kanye", "West", 3, 3),
("Spider", "Man", 3, 3),
("Clark", "Kent", 4, NULL),
("Luke", "DiFalco", 5, NULL);