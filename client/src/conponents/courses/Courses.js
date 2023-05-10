import React, { useEffect } from "react";
import Subcard from "../Subcard";
import "./Courses.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from "../../store/slices/SubjectSlice";

function Courses() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.subjectReducer.subjects);
    console.log("data of subjects : ", data);

    useEffect(() => {
        dispatch(fetchSubjects());
        
    }, []);

    return (
        <div className="course-container" style={{ textAlign: "center" }}>
            <div className="card-courses">
                {data.map((sub, id) => {
                    return (
                        <Subcard
                            key={id}
                            subjectName={sub.subject}
                            to={`contents/${sub.id}`}
                        ></Subcard>
                    );
                })}
            </div>
        </div>
    );
}

export default Courses;
