import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AllTasksView from '../views/AllTasksView';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/AllTasksView.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, deleteTask } from '../redux/Tasks';

const AllTasksContainer = () => {
  const dispatch = useDispatch();
  const { tasksData, status, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(taskId));
    }
  };

  if (status === 'loading') {
    return <div>Loading tasks...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      <div className="row align-items-center mb-3">
        <div className="col-4">
          <Link to="/" className="btn btn-primary">
            Home
          </Link>
        </div>
        <div className="col-4 text-center">
          <h1 className="m-0">All Tasks</h1>
        </div>
        <div className="col-4 text-end">
          <Link to="/add-task" className="btn btn-primary">
            Add Task
          </Link>
        </div>
      </div>
      <div className="row">
        {tasksData.map((task) => (
          <div key={task.id} className="col-sm-6 col-md-4 col-lg-3">
            <AllTasksView
              task={task}
              onDelete={() => handleDeleteTask(task.id)}
              completionStatus={task.status ? 'Complete' : 'Not Complete'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasksContainer;








