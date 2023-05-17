import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/EmployeeForm.css";

import { useDispatch } from 'react-redux';
import { addEmployee } from "../../redux/employees";

const EmployeeForm = () => {
  const dispatch = useDispatch();
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const employee = {
      firstName: firstName,
      lastName: lastName,
      department: department
    }
    dispatch(addEmployee(employee));
    setFirstName("");
    setLastName("");
    setDepartment("");
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  }
  
  return (
    <div className="container mt-5">
        <div className="header">
            <Link to="/employees" className="btn btn-primary">Back</Link>
            <h1>Add Employee</h1>
            <Link to="/" className="btn btn-primary">Home</Link>
        </div>

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="department">Department</label>
                <input type="text" className="form-control" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <div><br></br></div>
            {showNotification && (<div className="notification">Employee created!</div>)}
        </form>
    </div>
  );
};

export default EmployeeForm;
