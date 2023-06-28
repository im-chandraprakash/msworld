import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

export const userProfile = createAsyncThunk("/user/getMyInfo", async () => {
    const response = await axiosClient.get("/user/getMyInfo");
    // console.log(response.result);
    return response.result.user;
});
const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        profile: [],
        profileStatus: "null",
    },
    extraReducers: function (builder) {
        builder
            .addCase(userProfile.fulfilled, (state, action) => {
                state.profile = action.payload;
                state.profileStatus = "success";
            })
            .addCase(userProfile.pending, (state, action) => {
                state.profileStatus = "loading";
            })
            .addCase(userProfile.rejected, (state, action) => {
                state.profileStatus = "failed";
            });
    },
});

export default userSlice.reducer;
