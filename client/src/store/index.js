import { configureStore } from "@reduxjs/toolkit";
import subjectReducer from '../store/slices/SubjectSlice';
import userReducer from "./slices/userSlice";

export default configureStore({
    reducer: {
        subjectReducer,
        userReducer,
    },
});
