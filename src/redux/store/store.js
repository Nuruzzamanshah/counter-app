import { configureStore } from "@reduxjs/toolkit";
// import { counterSlice } from "../state/counter/counterSlice";
import counterReducer from "../state/counter/counterSlice";

export default configureStore({
    reducer:{
        counter:counterReducer
    }
})