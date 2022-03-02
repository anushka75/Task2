import {configureStore} from "@reduxjs/toolkit";
import imagesReducer from "./Images/imageSlice";

export const store = configureStore({
    reducer:{
        images:imagesReducer
    },
});