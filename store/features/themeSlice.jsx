import {createSlice} from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name : "themeSlice",
    initialState : {
        theme : "dark"
    },
    reducers : {
        themeReducer : (state , action) => {
            state.theme = action.payload
        }
    }
});

export const {themeReducer} = themeSlice.actions;
export default themeSlice.reducer;