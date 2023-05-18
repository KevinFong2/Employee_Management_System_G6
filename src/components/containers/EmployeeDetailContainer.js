import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchEmployee } from '../../redux/employees';

import "../../css/EmployeeDetailContainer.css"

const EmployeeDetailContainer = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const response = await dispatch(fetchEmployee(id)).unwrap();
                setEmployee(response);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error('Failed to fetch employee data:', error);
            }
        };

        fetchEmployeeData();
    }, [dispatch, id]);

    if (loading) {
        return (
            <div className="container">
                <div className="row align-items-center mb-3">
                    <div className="col-12 text-center">
                        <h1>Loading employee data...</h1>
                    </div>
                </div>
            </div>
        );
    }

    if (!employee) {
        return (
            <div className="container">
                <div className="row align-items-center mb-3">
                    <div className="col-4">
                        <Link to="/employees" className="btn btn-primary">
                            Back to all employees
                        </Link>
                    </div>
                    <div className="col-8 text-center">
                        <h1 className="m-0">Employee not found</h1>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row align-items-center mb-3">
                <div className="col-4">
                    <Link to="/employees" className="btn btn-primary">
                        Back to all employees
                    </Link>
                </div>
                <div className="col-4 text-center">
                    <h1 className="m-0">{employee.name}</h1>
                </div>
                <div className="col-4 text-end">
                    <Link to={{
                        pathname: `/employees/${id}/edit`,
                        state: { employee }
                    }} className="btn btn-primary">
                        Edit
                    </Link>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title mb-4 text-center">Employee Details</h2>
                            <p className="card-text text-center">
                                <strong>First Name:</strong> {employee.firstName}
                            </p>
                            <p className="card-text text-center">
                                <strong>Last Name:</strong> {employee.lastName}
                            </p>
                            <p className="card-text text-center">
                                <strong>Department:</strong> {employee.department}
                            </p>

                            <h2 className="card-title mb-4 text-center">Tasks</h2>
                            {employee.tasks.length > 0 ? (
                                <ul className="list-group">
                                    {employee.tasks.map((task) => (
                                        <li className="list-group-item text-center" key={task.id}>
                                            <a href={`/tasks/${task.id}`}>Task {task.id}: {task.description}</a>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="card-text text-center">No Task assigned Click on the edit button to add task(s)</p>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetailContainer;
