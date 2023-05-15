import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from "./employees"
import TasksReducer from "./Tasks"

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    tasks: TasksReducer
  },
})