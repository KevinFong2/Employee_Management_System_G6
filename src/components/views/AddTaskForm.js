import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/TaskForm.css';

import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../redux/Tasks';
import { fetchEmployees } from '../../redux/employees';

const AddTaskForm = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.employeesData);
  console.log(employees);

  const [id, setId] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: id,
      description: description,
      priority: priority,
      status: false,
      employeeId: employeeId || null,
    };
    dispatch(addTask(task));
    setDescription('');
    setPriority('');
    setEmployeeId('');
    setId('');
  };

  return (
    <div className="container mt-5">
      <div className="header">
        <Link to="/tasks" className="btn btn-primary">
          Back
        </Link>
        <h1>Add Task</h1>
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            className="form-control"
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="">Select priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="form-group">
        <label htmlFor="employeeId">Employee</label>
        <select
          className="form-control"
          id="employeeId"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          required>
          <option value="">Select employee</option>
          {employees && employees.map(employee => 
            <option key={employee.id} value={employee.id}>
              {employee.firstName} {employee.lastName}
            </option>
          )}
        </select>
      </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;









