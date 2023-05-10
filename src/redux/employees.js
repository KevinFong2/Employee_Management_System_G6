import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employeesData: [
    { firstName: 'John', lastName: 'Doe', department: 'Sales', task: 'https://example.com' },
    { firstName: 'Jane', lastName: 'Smith', department: 'Marketing', task: 'https://example.com' },
    { firstName: 'Bob', lastName: 'Johnson', department: 'Engineering', task: 'https://example.com' },
  ],
}

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    deleteEmployee: (state, action) => {
      state.employeesData = state.employeesData.filter((_, i) => i !== action.payload);
      console.log("DELETE - ", action)
    }
  },
})

// Action creators are generated for each case reducer function
export const { deleteEmployee } = employeesSlice.actions

export default employeesSlice.reducer