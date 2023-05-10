import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/TaskForm.css";

import { useDispatch } from 'react-redux';
import { addTask } from "../redux/Tasks";

const AddTaskForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [completed, setCompleted] = useState(false);
  const [url, setUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      user: user,
      description: description,
      priority: priority,
      completed: completed,
      url: url
    }
    dispatch(addTask(task));
    setUser("");
    setDescription("");
    setPriority("");
    setCompleted(false);
    setUrl("");
    history.push("/tasks");
  }
  
  return (
    <div className="container mt-5">
      <div className="header">
        <Link to="/tasks" className="btn btn-primary">Back</Link>
        <h1>Add Task</h1>
        <Link to="/" className="btn btn-primary">Home</Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user">User</label>
          <input type="text" className="form-control" id="user" value={user} onChange={(e) => setUser(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select className="form-control" id="priority" value={priority} onChange={(e) => setPriority(e.target.value)} required>
            <option value="">Select priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="completed">Completed</label>
          <input type="checkbox" id="completed" checked={completed} onChange={(e) => setCompleted(e.target.checked)}/>
        </div>
        <div className="form-group">
          <label htmlFor="url">Task URL</label>
          <input type="text" className="form-control" id="url" value={url} onChange={(e) => setUrl(e.target.value)} required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddTaskForm;



