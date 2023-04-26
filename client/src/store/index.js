import { configureStore } from "@reduxjs/toolkit";
import subjectReducer from '../store/slices/SubjectSlice';

export default configureStore({
    reducer: {
        subjectReducer,
    },
});
