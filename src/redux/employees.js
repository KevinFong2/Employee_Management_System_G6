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

// Define the async thunk to add an employee to the API
export const addEmployee = createAsyncThunk(
  'employees/addEmployee',
  async (employee) => {
    try {
      console.log(employee)
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
  },  
});

// Export the async thunks and the reducer
export default employeesSlice.reducer;
