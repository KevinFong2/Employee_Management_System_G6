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

export const updateTask = createAsyncThunk(
    'tasks/updateTask',
    async (task) => {
        try {
            const response = await axios.put(`${path}/tasks/${task.id}`, task);
            return response.data;
        } catch (err) {
            throw err;
        }
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
            const index = state.tasksData.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasksData[index] = action.payload;
            }
        });
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fetchTasks),
});

// Export the async thunks and the reducer
export default tasksSlice.reducer;

