import { configureStore } from "@reduxjs/toolkit";
import subjectReducer from '../store/slices/SubjectSlice';
import userReducer from "./slices/userSlice";
import quizReducer from "./slices/QuizSlice";

export default configureStore({
    reducer: {
        subjectReducer,
        userReducer,
        quizReducer,
    },
});
