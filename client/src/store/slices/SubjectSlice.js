import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { axiosClient } from '../../utils/axiosClient';

export const fetchSubjects = createAsyncThunk("sub/getAllSubjects" , async ()=>{

    try {

        const response = await axiosClient.get("/sub/getAllSubject");


        console.log(response.result.allSubjects);
        // return response.result.allSubjects;
        return response.result.allSubjects;
    } catch (e) {
        return Promise.reject(e);
    }
})

export const fetchTopics = createAsyncThunk("sub/getAllTopic", async ({subject_id}) => {
    try {

        console.log("subject id", subject_id);
        const response = await axiosClient.get(`/sub/getAllTopic/${subject_id}`);
             
        console.log(response.result);

        // return response.result.allSubjects;
        return response.result.data;
    } catch (e) {
        return Promise.reject(e);
    }
});

export const getTopicLength = createAsyncThunk("sub/getTopicLength", async () => {
    try {
        const response = await axiosClient.get("/sub/getTopicLength");

        console.log("length of Topics is : " , response.result.length);
        return response.result.length;
    } catch (e) {
        console.log(e);
    }
});

export const findTopicName = createAsyncThunk("sub/findTopic" ,async ({id}) =>{

    try {
         console.log(id);
         const response = await axiosClient.get(`/sub/findTopic/${id}`);
         console.log(response.result);
         return response.result.data.name;
    } catch (e) {
        console.log(e);
    }

});

export const getContentLength = createAsyncThunk("sub/getContentLength", async() => {
    
    try {
        console.log("inside the thunk : ");
        const response = await axiosClient.get("/sub/getContentLength");
        console.log("Content Length is : ", response.result.length);
        return response.result.length;
    } catch (e) {
        console.log(e);
    }
    
});

export const fetchContents = createAsyncThunk("sub/getContents", async ({topic_id}) => {
    try {

        console.log("topic id", topic_id);
        const response = await axiosClient.get(`/sub/getContents/${topic_id}`);
             
        console.log("content data : ", response.result);
        // return response.result.allSubjects;
        return response.result.data;
    } catch (e) {
        return Promise.reject(e);
    }
});

const subjectSlice = createSlice({
    name:"subjectSlice",
    initialState:{
        subjects:[],
        topics:[],
        topicLength:0,
        topicName:'',
        contentLength:0,
        contents:[]
    },
    extraReducers:function(builder){

        builder.addCase(fetchSubjects.fulfilled , (state , action) =>{
            state.subjects = action.payload;
        })
        .addCase(fetchTopics.fulfilled , (state , action) =>{
            state.topics = action.payload;
        })
        .addCase(getTopicLength.fulfilled , (state , action) =>{
            state.topicLength = action.payload;
            // console.log("action payload" , action.payload);
        })
        .addCase(findTopicName.fulfilled , (state , action) =>{
            state.topicName = action.payload;
        })
        .addCase(getContentLength.fulfilled , (state , action)=>{
            state.contentLength = action.payload;

           console.log("action payload", action.payload);
        })
        .addCase(fetchContents.fulfilled , (state , action)=>{
            state.contents = action.payload;

        //    console.log("action payload", action.payload);
        })
    }
});

export default subjectSlice.reducer;