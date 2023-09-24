import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {list: [], inputValue: ""}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialStateValue,
    reducers: {
        updateInputValue: (state, action) => {
            state.inputValue = action.payload
        },
        addTodoItem: (state) => {
            state.list.push({
                name: state.inputValue,
                completed: false
            });
            state.inputValue = ""
        },
        deleteTodoItem: (state, action) => {
            const newList = state.list.filter((_, index) => (index !== action.payload));
            state.list = newList;
        },
        toggleComplete: (state, action) => {
            const newList = state.list.map((item, index) => {
                if (index === action.payload) {
                    item.completed = !item.completed;
                }
                return item
            })
            state.list = newList;
        }
    }
})

export const { updateInputValue, addTodoItem, deleteTodoItem, toggleComplete} = todoSlice.actions

export default todoSlice.reducer