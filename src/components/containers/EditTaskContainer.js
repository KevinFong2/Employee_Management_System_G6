import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../redux/Tasks';
import { fetchEmployees } from '../redux/employees';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/EditTaskForm.css';
import '../../css/TaskForm.css';

const EditTaskForm = () => {
  const { state } = useLocation();
  const task = state.task;

  const dispatch = useDispatch();
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [completed, setCompleted] = useState(task.status);
  const [employeeId, setEmployeeId] = useState(task.employeeId);
  const [showNotification, setShowNotification] = useState(false);
  const employees = useSelector((state) => state.employees.employeesData);


  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...task,
      description,
      priority,
      status: completed, // Update status property
      employeeId: task.employeeId || null,
    };

    console.log(updatedTask);
  
    dispatch(updateTask(updatedTask));
    setShowNotification(true);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    history.push(`/tasks/${task.id}`);
  };

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  useEffect(() => {
    if (showNotification) {
      setTimeout(() => {
        history.push(`/tasks/${task.id}`);
        setShowNotification(false);
      }, 1500);
    }
  }, [showNotification, task.id, history]);

  const handleChangeEmployeeId = (e) => {
    setEmployeeId(e.target.value);
  };

  const handleChangeCompleted = (e) => {
    setCompleted(e.target.checked);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4">
          <form className="edit-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <select
                className="form-control"
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="employeeId">Assign To</label>
              <select
                className="form-control"
                id="employeeId"
                value={employeeId}
                onChange={handleChangeEmployeeId}>
                <option value={null}>Not Assigned</option>
                {employees.map((employee) => (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="completed"
                  checked={completed}
                  onChange={handleChangeCompleted}
                />
                <label className="form-check-label" htmlFor="completed">
                  Completed
                </label>
              </div>
            </div>

            <div className="btn-group d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button className="btn btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
            </div>
            <div>
              <br></br>
            </div>
            {showNotification && (
              <div className="notification">
                Task information updated, you will be redirected shortly
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTaskForm;









