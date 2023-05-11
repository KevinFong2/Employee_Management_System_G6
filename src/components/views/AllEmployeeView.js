import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/AllEmployeeView.css';

const AllEmployeeView = ({ employee, onDelete }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div>
          <h5 className="card-title">{employee.firstName} {employee.lastName}</h5>
          <p className="card-text">Department: {employee.department}</p>
          <div>
            <Link to={`/employees/:${employee.id}`} className="btn btn-success me-2">Details</Link>
            <button className="btn btn-danger" onClick={onDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEmployeeView;
