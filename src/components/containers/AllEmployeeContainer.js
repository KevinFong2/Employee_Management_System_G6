import React from 'react';
import { Link } from 'react-router-dom';
import AllEmployeeView from '../views/AllEmployeeView';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/AllEmployeeView.css';
import { useDispatch, useSelector } from 'react-redux';
import {deleteEmployee} from "../../redux/employees"

const AllEmployeeContainer = () => {
  const {employeesData} = useSelector(state => state.employees);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row align-items-center mb-3">
        <div className="col-4">
          <Link to="/" className="btn btn-primary">Home</Link>
        </div>
        <div className="col-4 text-center">
          <h1 className="m-0">All Employees</h1>
        </div>
        <div className="col-4 text-end">
          <Link to="/" className="btn btn-primary">Add Employee</Link>
        </div>
      </div>
      <div className="row">
        {employeesData.map((employee, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3">
            <AllEmployeeView
              employee={employee}
              onDelete={() => dispatch(deleteEmployee(index))}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEmployeeContainer;
