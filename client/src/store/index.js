import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";

export default configureStore({
    reducer: {
        users: UserSlice,
    },
});
