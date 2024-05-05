import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addNewTask(state, action) {
            state.tasks.push(action.payload);
        },
        updateTask(state, action) {
            const task = state.tasks.find(t => t.taskId === action.payload.taskId);
            task.task = action.payload.task;
            task.description = action.payload.description;
            task.status = action.payload.status;
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter(t => t.taskId !== action.payload);
        }
    }
});

export const getNewTasks = state => state.todo.tasks.filter(t => t.status.includes('new'));
export const getInProgressTasks = state => state.todo.tasks.filter(t => t.status.includes('in-progress'));
export const getCompletedTasks = state => state.todo.tasks.filter(t => t.status.includes('completed'));
export const getBlockedTasks = state => state.todo.tasks.filter(t => t.status.includes('blocked'));
export const getTaskById = id => state => state.todo.tasks.find(t => t.taskId === id);

export const {addNewTask, updateTask, deleteTask} = todoSlice.actions;
export default todoSlice.reducer;