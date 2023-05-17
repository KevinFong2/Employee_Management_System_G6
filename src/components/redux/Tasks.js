import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const path = "https://employee-management8.herokuapp.com";

// Define the async thunk to fetch the tasks data
export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async () => {
    try {
      const response = await axios.get(`${path}/tasks`);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

// Define the async thunk to fetch a single task data from the API
export const fetchTask = createAsyncThunk(
  'tasks/fetchTask',
  async (id) => {
    try {
      const response = await axios.get(`${path}/tasks/${id}`);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

// Define the async thunk to add a task to the API
export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task) => {
    try {
      const response = await axios.post(`${path}/tasks`, task);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

// Define the async thunk to delete a task from the API
export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id) => {
    try {
      await axios.delete(`${path}/tasks/${id}`);
      return id;
    } catch (err) {
      throw err;
    }
  }
);

// Define the async thunk to update a task in the API
export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (task) => {
    try {
      const response = await axios.put(`${path}/tasks/${task.id}`, task);
      return response.data;
    } catch (err) {
      throw err;
    }
  },
  {
    condition: (task, { getState }) => {
      const existingTask = getState().tasks.tasksData.find(
        (t) => t.id === task.id
      );
      return existingTask && existingTask.status !== task.status; // Update the condition to check for status change
    },
  }
);


const initialState = {
  tasksData: [],
  status: 'idle',
  error: null,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.tasksData = action.payload;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.tasksData = state.tasksData.filter(
        (task) => task.id !== action.payload
      );
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.status = 'succeeded';
      const updatedTask = action.payload;
      const index = state.tasksData.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasksData[index] = { ...state.tasksData[index], status: updatedTask.status };
      }
      });
      },
      });
      
      // Export the async thunks and the reducer
      export const { } = tasksSlice.actions;
      export default tasksSlice.reducer;


