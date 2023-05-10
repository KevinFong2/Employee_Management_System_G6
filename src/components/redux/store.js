import { configureStore } from '@reduxjs/toolkit'
import TasksReducer from "./Tasks"

export const store = configureStore({
  reducer: {
    Tasks: TasksReducer
  },
})