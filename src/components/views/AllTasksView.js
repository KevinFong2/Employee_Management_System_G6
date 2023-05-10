import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/AllTasksView.css';

const AllTasksView = ({ Task, onDelete }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{Task.User}</h5>
        <p className="card-text">Description: {Task.description}</p>
        <p classNmae="card-text">Priority level: {Task.priority}</p>
        <p className="card-text">Completion Status: {Task.completed ? 'Completed' : 'Not Complete'}</p>
        <p className="card-text">Task URL: <a href={Task.url}>{Task.url}</a></p>
        <button className="btn btn-danger" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default AllTasksView;


