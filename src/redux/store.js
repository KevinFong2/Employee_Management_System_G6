import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from "./employees"

export const store = configureStore({
  reducer: {
    employees: employeesReducer
  },
})