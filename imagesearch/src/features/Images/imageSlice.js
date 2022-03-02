import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncImages = createAsyncThunk(
    'Images/fetchAsyncImages', 
    async (term)=>{
        if(term)
        {
            const response= await axios.get(`http://127.0.0.1:5000/${term}`);
            return response.data;
        }
        else
        {
            const response= await axios.get(`http://127.0.0.1:5000/`);
            return response.data;
        }
   
});

const initialState={
    images:[],
};

const imageSlice= createSlice({
    name:"Images",
    initialState,
    reducers:{ 
        addImages:(state,{payload}) => {
            state.images=payload;
        },
    },
    extraReducers:{
        [fetchAsyncImages.pending]:() => {
            console.log("pending");
        },
        [fetchAsyncImages.fulfilled]:(state,{payload}) => {
            console.log("Success");
            return { ...state,images:payload};
        },
        [fetchAsyncImages.rejected]:() => {
            console.log("Rejected");
        },
    }
});

export const {addImages} = imageSlice.actions;
export const getAllImages=(state) => state.images.images;
export default imageSlice.reducer;