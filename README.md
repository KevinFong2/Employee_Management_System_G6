# Fullstack CRUD Application
### Employee Management System
Due: May 18th 11:59 (only one person in the group submit the assignment on blackboard)

#### Goal
Using Node, Express, React, Redux, PostgreSQL, and Sequelize, build a RESTful full-stack web application to manage tasks and employees. This will cover all of the CRUD operations: Create, Read, Update, and Delete. This will encompass writing models, querying a database with an ORM, designing routes/endpoints and handler functions to process user requests and generate responses, writing out React Components, managing the state of the application with React-Redux, and much more. This will also involve having two individual repositories/applications (a separate server and a separate client), which encourages separation of concerns and modularity. 
### Submission
For the final project, you will create two applications: a React app that will be the “frontend” and a Node.js app that will be the “backend”. You should have two separate GitHub repos, one for the frontend app and one for the backend app. Please submit links to both repos. You can work in groups of up to 4. Please put group member names in README.
Git/GitHub requirements
Continue to use feature branch workflow, creating pull requests when merging feature branches.
 At the minimum you should have 5 pull requests per repo, you can use the breakdown of the technical requirements as a guide for this. 
If working in groups, please split the work as evenly as possible, since you will be assessed individually. 



### Assignment
Complete the following user stories:
As a user I:
[x] will land on a visually pleasing homepage by default, which allows navigation to view all tasks and all employees

can navigate to all employees view, and
[x] see a list of all employees in the database
[x] see an informative message if no employees exist
[x] delete any existing employees
[x] add a new employee
[   ] with a validated form displaying real-time error messages

can navigate to any single employee’s view, and
[   ] see details about a single employee, including tasks assigned (if any) 
[x] see an informative message if no tasks belong to that employee
[x] can navigate to single task view (see below)
[   ] edit employee information (including adding/removing tasks)
[   ] with a validated form displaying real-time error messages

can navigate to all tasks view, and
[   ] see a list of all tasks in the database
[   ] see an informative message if no tasks exist
[   ] delete any existing tasks
[   ] add a new task
[   ] with a validated form displaying real-time error messages

can navigate to any single task’s view, and
[   ] see details about a single task, including the employee assigned
[   ] should display “Unassigned” if the task is not assigned to an employee
[   ] navigate to single employee view of the employee assigned the task
[   ] edit the task’s information (including employee assigned)
[   ] with a validated form displaying real-time error messages




Technical breakdown of requirements:

### All employees && All tasks 

Database (Sequelize)
- [ ] Write an Employee model with the following information: 
- [ ] First name  
- [ ] Last name 
- [ ] Department 

- [ ] Write a Task model with the following information:
	- [ ] Assigned to User
- [ ] Description
- [ ] Priority level
- [ ] Completion status (completed status or not started status)

- [ ] A Task may be associated with at most one employee
- [ ] An Employee may be associated with many tasks

API (Express, Sequelize)
- [ ] Write a route that returns all tasks in the database
- [ ] Write a route that returns all employees in the database

State management (Redux)
- [ ] Write a sub-reducer to manage employees in your Redux store
- [ ] Write a sub-reducer to manage tasks in your Redux store

UI (React)
- [ ] Write a component to display a list of all employees
- [ ] Write a component to display a list of all tasks

Client-side routing (React-Router)
- [ ] Display the all-employees component when the URL matches `/employees`
- [ ] Display the all-tasks component when the URL matches `/tasks`
- [ ] Add links to the navbar that can be used to navigate to the all-employees view and the all-tasks view




### Single task && Single employee 

API (Express, Sequelize)
- [ ] Write a route to serve up a single employee (based on their id), including that employee’s tasks
- [ ] Write a route to serve up a single task (based on its id), including that task's employee

State management (Redux)
- [ ] Write an employee sub-reducer for getting an employee based on ID
- [ ] Write a task sub-reducer for getting a task based on the ID 

UI (React)
- [ ] Write a component to display a single employee with the following information: 
- [ ] The employee's full name and department
- [ ] A list of all tasks that the employee is assigned 
- [ ] Write a component to display a single task with the following information:  
- [ ] The task description, priority level, and completion status
- [ ] The name of the employee to which the task is assigned

Client-side routing (React-Router)
- [ ] Display the appropriate employee's info when the URL matches `/employees/:employeeId`
- [ ] Clicking on an employee from the all-employees view should navigate to show that employee in the single-employee view
- [ ] Display the appropriate task when the URL matches `/tasks/:taskId`
- [ ] Clicking on a task from the all-tasks view should navigate to show that task in the single-task view
- [ ] Clicking on the name of a task in the single-employee view should navigate to show that task in the single-task view
- [ ] Clicking on the name of an employee in the single-task view should navigate to show that employee in the single-employee view

### Editing an employee && Editing a task 

API (Express, Sequelize)
- [ ] Write a route to edit an employee
- [ ] Write a route to edit a task

UI (React)
- [ ] Write a component to display a form for editing an employee’s information
- [ ] Display this component EITHER as part of the single-employee view or as its own view
- [ ] Submitting the form should: 
- [ ] Make a request that causes the employee to be updated in the database  
- [ ] Display the updates without needing to refresh the page

- [ ] Write a component to display a form for editing a task
- [ ] Display this component EITHER as part of the single-task view or as its own view
- [ ] Submitting the form should: 
- [ ] Make a request that causes the task to be updated in the database 
- [ ] Display the updates without needing to refresh the page


### Adding a new task && Adding a new employee

API (Express, Sequelize)
- [ ] Write a route to add a new employee
- [ ] Write a route to add a new task

UI (React)
- [ ] Write a component to display a form for adding a new employee that contains inputs for the first name, last name, and department
- [ ] Display this component EITHER as part of the all-employees view or as its own view
- [ ] Submitting the form with the required fields should:
- [ ] Make a request that adds the new employee to the database
- [ ] Display the updates without needing to refresh the page

- [ ] Write a component to display a form for adding a new task that contains inputs for the task description, priority level, completion status
- [ ] Display this component EITHER as part of the all-tasks view or as its own view
- [ ] Submitting the form with the required fields:  
- [ ] Make a request that causes the new task to be persisted in the database 
- [ ] Add the new task to the list of tasks without needing to refresh the page



### Removing an employee && Removing a task

API (Express, Sequelize)
- [ ] Write a route to remove an employee (based on their id)
- [ ] Write a route to remove a task (based on its id)

UI (React)
- [ ] In the all-employees view, include an `X` button next to each employee
- [ ] Clicking the `X` button should:  
- [ ] Make a request that causes that employee to be removed from the database  
- [ ] Update the UI without needing to refresh the page

- [ ] In the all-tasks view, include an `X` button next to each task
- [ ] Clicking the `X` button should:
- [ ] Make a request that causes that task to be removed from the database 
- [ ] Remove the task from the list of tasks without needing to refresh the page
