import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from '../../redux/employees';
import { fetchTasks, updateTask } from '../../redux/Tasks';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/EditEmployeeForm.css';
import '../../css/EmployeeForm.css';

const EditEmployeeForm = () => {
    const { state } = useLocation();
    const employee = state.employee;

    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(employee.firstName);
    const [lastName, setLastName] = useState(employee.lastName);
    const [department, setDepartment] = useState(employee.department);
    const [showNotification, setShowNotification] = useState(false);
    const [selectedTasks, setSelectedTasks] = useState(employee.tasks || []);

    const tasksData = useSelector((state) => state.tasks.tasksData);
    const unassignedTasks = tasksData.filter(
        (task) => !task.employeeId || task.employeeId === employee.id
    );

    // Filter out the pre-assigned tasks from unassignedTasks
    const filteredUnassignedTasks = unassignedTasks.filter(
        (task) =>
          !selectedTasks.some((selectedTask) => selectedTask.id === task.id) ||
          employee.tasks.some((assignedTask) => assignedTask.id === task.id)
      );

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedEmployee = {
            ...employee,
            firstName,
            lastName,
            department,
        };

        // Update the employee information
        dispatch(updateEmployee(updatedEmployee));

        // Update the tasks' employeeId for the selected tasks
        const updatedTasks = selectedTasks.map((task) => ({
            ...task,
            employeeId: employee.id,
        }));

        updatedTasks.forEach((task) => dispatch(updateTask(task)));

        // Remove the employeeId from the tasks that are no longer selected
        const tasksToRemove = employee.tasks.filter(
            (task) => !selectedTasks.some((selectedTask) => selectedTask.id === task.id)
        );
        tasksToRemove.forEach((task) => {
            const updatedTask = {
                ...task,
                employeeId: null,
            };
            dispatch(updateTask(updatedTask));
        });

        setShowNotification(true);
    };


    const handleCancel = (e) => {
        e.preventDefault();
        history.push(`/employees/${employee.id}`);
    };

    const handleTaskSelect = (taskId) => {
        setSelectedTasks((prevSelectedTasks) => {
          const isTaskSelected = prevSelectedTasks.some((task) => task.id === taskId);
          if (isTaskSelected) {
            // If the task is already selected, remove it
            const updatedTasks = prevSelectedTasks.filter((task) => task.id !== taskId);
            return updatedTasks;
          } else {
            const task = tasksData.find(
              (task) => task.id === taskId && (task.employeeId === null || task.employeeId === employee.id)
            );
            if (task) {
              // Check if the task is a pre-assigned task
              const isPreAssignedTask = employee.tasks.some((assignedTask) => assignedTask.id === taskId);
              if (isPreAssignedTask) {
                // Add the pre-assigned task to the selected tasks without modifying its employeeId
                return [...prevSelectedTasks, task];
              } else {
                // Add the task with the employeeId
                return [...prevSelectedTasks, { ...task, employeeId: employee.id }];
              }
            }
          }
          return prevSelectedTasks;
        });
      };
      
    useEffect(() => {
        if (showNotification) {
            setTimeout(() => {
                history.push(`/employees/${employee.id}`);
                setShowNotification(false);
            }, 1500);
        }
    }, [showNotification, employee.id, history]);
    
    const mergedTasks = [
        ...filteredUnassignedTasks,
        ...selectedTasks.filter((task) => !filteredUnassignedTasks.some((t) => t.id === task.id))
      ];

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-6 col-lg-4">
                    <form className="edit-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} 
                                maxLength="20"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)} 
                                maxLength="20"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="department">Department</label>
                            <input
                                type="text"
                                className="form-control"
                                id="department"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)} 
                                maxLength="50"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Tasks</label>
                            {mergedTasks.length > 0 ? mergedTasks.map((task) => (
                                <div className="form-check" key={task.id}>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={task.id}
                                        value={task.id}
                                        checked={selectedTasks.some((selectedTask) => selectedTask.id === task.id)}
                                        onChange={() => handleTaskSelect(task.id)}
                                    />
                                    <label className="form-check-label" htmlFor={task.id}>
                                        {task.description}
                                    </label>
                                </div>
                            ))
                        : <p>All tasks has been assigned. Click <a href='/add-task'>here</a> to create more task(s)</p>}
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
                                Employee information updated, you will be redirected shortly
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditEmployeeForm;
