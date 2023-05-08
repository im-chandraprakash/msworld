import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

const getUserData = createAsyncThunk("/" , async ()=>{

    const response = await axiosClient("/");
    console.log(response.result);
})

const statusSlice = createSlice({
    name:"statusSlice",
    initialState:{
        userProfileStatus:'null',
    },
    extraReducers:function(builder){

        builder.addCase()
    }
    
})