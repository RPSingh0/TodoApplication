import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice.js";
import formReducer from "./features/formSlice.js";
import {loadState, saveState} from "./utilities/localStorage.js";

const preloadedState = {
    'todo': loadState('todo')
}

const store = configureStore({
    reducer: {
        'todo': todoReducer,
        'form': formReducer,
    },
    preloadedState
});

store.subscribe(() => {
    saveState('todo', store.getState().todo);
});

export default store;