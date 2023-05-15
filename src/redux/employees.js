import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const path = "https://employee-management8.herokuapp.com";

// Define the async thunk to fetch the employees data
export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async () => {
    try {
      const response = await axios.get(`${path}/employees`);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

// Define the async thunk to fetch a single employee data from the API
export const fetchEmployee = createAsyncThunk(
  'employees/fetchEmployee',
  async (id) => {
    try {
      const response = await axios.get(`${path}/employees/${id}`);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

// Define the async thunk to add an employee to the API
export const addEmployee = createAsyncThunk(
  'employees/addEmployee',
  async (employee) => {
    try {
      const response = await axios.post(`${path}/employees`, employee);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

// Define the async thunk to delete an employee from the API
export const deleteEmployee = createAsyncThunk(
  'employees/deleteEmployee',
  async (id) => {
    try {
      await axios.delete(`${path}/employees/${id}`);
      return id;
    } catch (err) {
      throw err;
    }
  }
);

export const updateEmployee = createAsyncThunk(
  'employees/updateEmployee',
  async (employee) => {
    try {
      const response = await axios.put(`${path}/employees/${employee.id}`, employee);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

const initialState = {
  employeesData: [],
  status: 'idle',
  error: null,
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.employeesData = action.payload;
    });
    builder.addCase(fetchEmployees.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(deleteEmployee.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.employeesData = state.employeesData.filter(
        (employee) => employee.id !== action.payload
      );
    });
    builder.addCase(updateEmployee.fulfilled, (state, action) => {
      state.status = 'succeeded';
      const index = state.employeesData.findIndex(employee => employee.id === action.payload.id);
      if (index !== -1) {
        state.employeesData[index] = action.payload;
      }
    });
  },  
});

// Export the async thunks and the reducer
export default employeesSlice.reducer;
