import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { axiosClient } from '../../utils/axiosClient';

export const fetchSubjects = createAsyncThunk("cse/getAllSubjects" , async ()=>{

    try {

        const response = await axiosClient.get("/cse/getAllSubject");


        console.log(response.result.allSubjects);
        // return response.result.allSubjects;
        return response.result.allSubjects;
    } catch (e) {
        return Promise.reject(e);
    }
})

export const fetchTopics = createAsyncThunk("cse/getTopics", async ({subject_id}) => {
    try {

        console.log("subject id", subject_id);
        const response = await axiosClient.get(`/cse/getTopics/${subject_id}`);
             
        console.log(response.result);

        // return response.result.allSubjects;
        return response.result.data;
    } catch (e) {
        return Promise.reject(e);
    }
});

export const getTopicLength = createAsyncThunk("cse/getTopicLength", async () => {
    try {
        const response = await axiosClient.get("/cse/getTopicLength");

        console.log("length of Topics is : " , response.result.length);
        return response.result.length;
    } catch (e) {
        console.log(e);
    }
});

export const findTopicName = createAsyncThunk("cse/findTopic" ,async ({id}) =>{

    try {
         console.log(id);
         const response = await axiosClient.get(`/cse/findTopic/${id}`);
         console.log(response.result);
         return response.result.data.name;
    } catch (e) {
        console.log(e);
    }

});

export const getContentLength = createAsyncThunk("cse/getContentLength", async() => {
    
    try {
        console.log("inside the thunk : ");
        const response = await axiosClient.get("/cse/getContentLength");
        console.log("Content Length is : ", response.result.length);
        return response.result.length;
    } catch (e) {
        console.log(e);
    }
    
});

export const fetchContents = createAsyncThunk("cse/getContents", async ({topic_id}) => {
    try {

        console.log("topic id", topic_id);
        const response = await axiosClient.get(`/cse/getContents/${topic_id}`);
             
        console.log("content data : ", response.result);
        // return response.result.allSubjects;
        return response.result.data;
    } catch (e) {
        return Promise.reject(e);
    }
});

export const fetchAllContents = createAsyncThunk("cse/getAllContents" , async()=>{
    
    try {
        const response = await axiosClient.get("/cse/getAllContents");
        // console.log("All content is " , response.result);
        return response.result;
    } catch (e) {
        return Promise.reject(e);
    }
});

export const fetchAllTopics = createAsyncThunk(
    "cse/getAllTopics",
    async () => {
        try {
            const response = await axiosClient.get("/cse/getAllTopics");
            console.log("All Topics is " , response.result);
            return response.result?.data;
        } catch (e) {
            return Promise.reject(e);
        }
    }
);

const subjectSlice = createSlice({
    name:"subjectSlice",
    initialState:{
        subjectStatus:'idle',
        topicStatus:'idle',
        subjects:[],
        topics:[],
        topicLength:0,
        topicName:'',
        contentLength:0,
        contents:[],
        allContents:[],
        allTopics:[],
    },
    extraReducers:function(builder){

        builder
            .addCase(fetchSubjects.fulfilled, (state, action) => {
                state.subjects = action.payload;
                state.subjectStatus = "success";
            })
            .addCase(fetchSubjects.pending, (state, action) => {
                state.subjectStatus = "loading";
            })
            .addCase(fetchSubjects.rejected, (state, action) => {
                state.subjectStatus = "failed";
            })
            .addCase(fetchTopics.fulfilled, (state, action) => {
                state.topics = action.payload;
                state.topicStatus = "success";
            })
            .addCase(fetchTopics.pending, (state, action) => {
                state.topicStatus = "loading";
            })
            .addCase(fetchTopics.rejected, (state, action) => {
                state.topicStatus = "failed";
            })
            .addCase(getTopicLength.fulfilled, (state, action) => {
                state.topicLength = action.payload;
                // console.log("action payload" , action.payload);
            })
            .addCase(findTopicName.fulfilled, (state, action) => {
                state.topicName = action.payload;
            })
            .addCase(getContentLength.fulfilled, (state, action) => {
                state.contentLength = action.payload;

                console.log("action payload", action.payload);
            })
            .addCase(fetchContents.fulfilled, (state, action) => {
                state.contents = action.payload;
            })
            .addCase(fetchAllContents.fulfilled, (state, action) => {
                state.allContents = action.payload;
            })
            .addCase(fetchAllTopics.fulfilled , (state , action) =>{
                state.allTopics = action.payload;
            });
    }
});

export default subjectSlice.reducer;