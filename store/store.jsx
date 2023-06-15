import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";

const store = configureStore({
    reducer : {
        themeReducer
    }
})

export default store;