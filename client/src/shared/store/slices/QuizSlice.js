import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

export const allQuizes = createAsyncThunk("/quiz/getAllQuiz", async () => {
    try {
        const response = await axiosClient.get("/quiz/getAllQuiz");
        return response.result?.data;
    } catch (e) {
        console.log(e);
    }
});

const quizSlice = createSlice({
    name: "quizSlice",
    initialState: {
        allQuizes: [],
    },
    extraReducers: function (builder) {
        builder.addCase(allQuizes.fulfilled, (state, action) => {
            state.allQuizes = action.payload;
        });
    },
});
export default quizSlice.reducer;
