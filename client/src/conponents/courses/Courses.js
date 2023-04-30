import React, { useEffect } from "react";
import Subcard from "../Subcard";
import "./Courses.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from "../../store/slices/SubjectSlice";

function Courses() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.subjectReducer.subjects);

    useEffect(() => {
        dispatch(fetchSubjects());
        console.log("data : ", data);
    }, []);

    return (
        <div className="course-container">
            <div className="card-courses">
                {data.map((sub, id) => {
                    return <Subcard key={id} subjectName={sub.subject} to={"/dsa"}></Subcard>;
                })}
            </div>
        </div>
    );
}

export default Courses;
