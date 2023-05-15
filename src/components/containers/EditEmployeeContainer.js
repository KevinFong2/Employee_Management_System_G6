import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateEmployee } from '../../redux/employees';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/EditEmployeeForm.css';
import "../../css/EmployeeForm.css";

const EditEmployeeForm = () => {
    const { state } = useLocation();
    const employee = state.employee;

    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(employee.firstName);
    const [lastName, setLastName] = useState(employee.lastName);
    const [department, setDepartment] = useState(employee.department);
    const [showNotification, setShowNotification] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedEmployee = {
            ...employee,
            firstName,
            lastName,
            department,
        };
        dispatch(updateEmployee(updatedEmployee));
        setShowNotification(true);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        history.push(`/employees/${employee.id}`);
    };

    useEffect(() => {
        if (showNotification) {
            setTimeout(() => {
                history.push(`/employees/${employee.id}`);
                setShowNotification(false);
            }, 1500);
        }
    }, [showNotification, employee.id, history]);

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
                />
                </div>
                <div className="btn-group d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                </div>
                <div><br></br></div>
                {showNotification && (<div className="notification">Employee information updated, you will be redirected shortly</div>)}
            </form>
            </div>
        </div>
        </div>
    );
};

export default EditEmployeeForm;
