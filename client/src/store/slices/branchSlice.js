import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";
import QuizSlice from "./QuizSlice";

export const getAllBranch = createAsyncThunk(
    "/branch/getAllBranch",
    async () => {
        try {
            const response = await axiosClient.get("/branch/getAllBranch");
            return response.result?.data;
        } catch (e) {
            console.log(e);
        }
    }
);

const branchSlice = createSlice({
    name: "branchSlice",
    initialState: {
        allBranch: [],
    },
    extraReducers: function (builder) {
        builder.addCase(getAllBranch.fulfilled, (state, action) => {
            state.allBranch = action.payload;
        });
    },
});

export default branchSlice.reducer;
