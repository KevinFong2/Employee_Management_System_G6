import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/AllTasksView.css';

const AllTasksView = ({ task, onDelete }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Task: {task.id}</h5>
        <p className="card-text">Description: {task.description}</p>
        <p className="card-text">Priority level: {task.priority}</p>
        <p className="card-text">
          Completion Status: {task.status ? 'Complete' : 'Not Complete'}
        </p>
        <div className="btn-group">
          <Link to={`/tasks/${task.id}`} className="btn btn-primary">
            Show Details
          </Link>
          <button className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllTasksView;







