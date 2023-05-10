import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasksData: [
    { 
      user: 'John Doe', 
      description: 'Complete sales report', 
      priority: 'High', 
      completed: false, 
      url: 'https://example.com' 
    },
    { 
      user: 'Jane Smith', 
      description: 'Create marketing campaign', 
      priority: 'Medium', 
      completed: false, 
      url: 'https://example.com' 
    },
    { 
      user: 'Bob Johnson', 
      description: 'Fix bug in application', 
      priority: 'High', 
      completed: true, 
      url: 'https://example.com' 
    },
  ],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasksData.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasksData = state.tasksData.filter((_, i) => i !== action.payload);
      console.log("DELETE - ", action)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer

