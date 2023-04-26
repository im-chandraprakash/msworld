import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { axiosClient } from '../../utils/axiosClient';

export const fetchSubjects = createAsyncThunk("/sub/getAllSubjects" , async ()=>{

    try {
        const response = await axiosClient.get("/sub/getAllSubject");
        console.log(response.result.allSubjects);
        // return response.result.allSubjects;
        return response.result.allSubjects;
    } catch (e) {
        return Promise.reject(e);
    }
})

const subjectSlice = createSlice({
    name:"subjectSlice",
    initialState:{
        subjects:[],
    },
    extraReducers:function(builder){

        builder.addCase(fetchSubjects.fulfilled , (state , action) =>{
            state.subjects = action.payload;
        })
    }
});

export default subjectSlice.reducer;