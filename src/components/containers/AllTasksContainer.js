import React from 'react';
import { Link } from 'react-router-dom';
import AllTasksView from '../views/AllTasksView';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/AllTasksView.css';
import { useDispatch, useSelector } from 'react-redux';
import {deleteTask} from "../redux/Tasks"

const AllTasksContainer = () => {
  const state = useSelector(state => state);
  const {tasksData} = state.tasks || {}; // add a check for undefined
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row align-items-center mb-3">
        <div className="col-4">
          <Link to="/" className="btn btn-primary">Home</Link>
        </div>
        <div className="col-4 text-center">
          <h1 className="m-0">All Tasks</h1>
        </div>
        <div className="col-4 text-end">
        <Link to="/add-task" className="btn btn-primary">Add Task</Link>
        </div>
      </div>
      <div className="row">
        {tasksData && tasksData.map((task, index) => ( // add a check for undefined
          <div key={index} className="col-sm-6 col-md-4 col-lg-3">
            <AllTasksView
              Task={task}
              onDelete={() => dispatch(deleteTask(index))}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasksContainer;




