import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    formType: 'new',
    editObject: null
}

const formSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        openNewForm(state) {
            state.isOpen = true;
            state.formType = 'new'
        },
        openEditForm(state, action) {
            state.isOpen = true;
            state.formType = 'edit';
            state.editObject = action.payload;
        },
        closeForm(state) {
            state.isOpen = false;
        }
    }
});
export const {openNewForm, openEditForm, closeForm} = formSlice.actions;
export default formSlice.reducer;