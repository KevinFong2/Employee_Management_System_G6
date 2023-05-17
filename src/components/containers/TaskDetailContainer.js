import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchTask } from '../../redux/Tasks';
import { fetchEmployee } from '../../redux/employees';

import '../../css/TaskDetailContainer.css';

const TaskDetailContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const taskResponse = await dispatch(fetchTask(id)).unwrap();
        setTask(taskResponse);
  
        if (taskResponse.employeeId) {
          const employeeResponse = await dispatch(fetchEmployee(taskResponse.employeeId)).unwrap();
          setTask((prevTask) => ({
            ...prevTask,
            employeeName: `${employeeResponse.firstName} ${employeeResponse.lastName}`,
          }));
        }
  
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Failed to fetch data:', error);
      }
    };
  
    fetchData();
  }, [dispatch, id]);
  
  

  if (loading) {
    return (
      <div className="container">
        <div className="row align-items-center mb-3">
          <div className="col-12 text-center">
            <h1>Loading task data...</h1>
          </div>
        </div>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="container">
        <div className="row align-items-center mb-3">
          <div className="col-4">
            <Link to="/tasks" className="btn btn-primary">
              Back to all tasks
            </Link>
          </div>
          <div className="col-8 text-center">
            <h1 className="m-0">Task not found</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row align-items-center mb-3">
        <div className="col-4">
          <Link to="/tasks" className="btn btn-primary">
            Back to all tasks
          </Link>
        </div>
        <div className="col-4 text-center">
          <h1 className="m-0">Task: {task.id}</h1>
        </div>
        <div className="col-4 text-end">
          <Link
            to={{
              pathname: `/tasks/${id}/edit`,
              state: { task },
            }}
            className="btn btn-primary"
          >
            Edit
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4 text-center">Task Details</h2>
              <p className="card-text text-center">
                <strong>Description:</strong> {task.description}
              </p>
              <p className="card-text text-center">
                <strong>Priority:</strong> {task.priority}
              </p>
              <p className="card-text text-center">
                <strong>Completion Status:</strong> {task.status ? 'Complete' : 'Not Complete'}
              </p>
              <p className="card-text text-center">
              <strong>Assigned:</strong>{task.employeeId ? (
              <Link to={`/employees/${task.employeeId}`}> {task.employeeName}</Link>
            ) : (
              'Not Assigned'
            )}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export default TaskDetailContainer;




