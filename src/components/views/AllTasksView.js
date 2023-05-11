import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/AllTasksView.css';

const AllTasksView = ({ task, onDelete }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Task: {task?.id}</h5>
        <p className="card-text">Description: {task?.description}</p>
        <p className="card-text">Priority level: {task?.priority}</p>
        <p className="card-text">Completion Status: {task?.completed ? 'Completed' : 'Not Complete'}</p>
        <p className="card-text">Assigned: {task?.employeeId ? <a href={`/employees/${task.employeeId}`}>Check Employee</a> : 'Not Assigned'}</p>
        <button className="btn btn-danger" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default AllTasksView;




