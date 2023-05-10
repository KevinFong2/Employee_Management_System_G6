import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/AllEmployeeView.css';

const AllEmployeeView = ({ employee, onDelete }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{employee.firstName} {employee.lastName}</h5>
        <p className="card-text">Department: {employee.department}</p>
        <p className="card-text">Task: <a href={employee.task}>{employee.task}</a></p>
        <button className="btn btn-danger" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default AllEmployeeView;
