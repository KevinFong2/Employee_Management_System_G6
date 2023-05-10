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

  if (employeesData.length > 0){
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
            <Link to="/add-employee" className="btn btn-primary">Add Employee</Link>
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
  }
  else {
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
            <Link to="/add-employee" className="btn btn-primary">Add Employee</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center" style={{height: "calc(100vh - 200px)"}}>
            <p className="fs-1 text-center">No employee data found. Click <Link to="/add-employee">here</Link> to create an employee.</p>
          </div>
        </div>
      </div>
    );
  }
  
  
};

export default AllEmployeeContainer;
