import { configureStore } from "@reduxjs/toolkit";
import subjectReducer from './slices/SubjectSlice';
import userReducer from "./slices/userSlice";
import quizReducer from "./slices/QuizSlice";
import branchReducer from "./slices/branchSlice";

export default configureStore({
    reducer: {
        branchReducer,
        subjectReducer,
        userReducer,
        quizReducer,
    },
});
