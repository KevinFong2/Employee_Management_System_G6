import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employeesData: [
    { id: 0, firstName: 'John', lastName: 'Doe', department: 'Sales', task: [1, 2, 3] },
    { id: 1, firstName: 'Jane', lastName: 'Smith', department: 'Marketing', task: [4, 5, 6] },
    { id: 2, firstName: 'Bob', lastName: 'Johnson', department: 'Engineering', task: [7, 8, 9] },
  ],
}

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    deleteEmployee: (state, action) => {
      state.employeesData = state.employeesData.filter((_, i) => i !== action.payload);
    },
    addEmployee: (state, action) => {
      state.employeesData = [...state.employeesData, {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        department: action.payload.department
      }]
      console.log(state.employeesData)
    }
  },
})

// Action creators are generated for each case reducer function
export const { deleteEmployee, addEmployee } = employeesSlice.actions

export default employeesSlice.reducer