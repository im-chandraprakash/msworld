import React, { useEffect } from "react";
// import Subcard from "../../../conponents/Subcard";
import Subcard from "../Subcard";
import "./Courses.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from "../../../shared/store/slices/SubjectSlice";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Typography from "antd/es/typography/Typography";

function Courses() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.subjectReducer.subjects);
    // console.log("data of subjects carausal : ", data);

    useEffect(() => {
        dispatch(fetchSubjects());
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 2524, min: 768 },
            items: 3,
            // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 768, min: 600 },
            items: 2,
            //    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            //    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
        },
    };

    return (
        <div className="home-subjects">
            <div className="crausal-subjects">
                <Typography.Title
                    style={{ textAlign: "center", marginBottom: "50px" }}
                >
                    Subjects
                </Typography.Title>
                <Carousel
                    responsive={responsive}
                    swipeable="true"
                    draggable="true"
                    className="subject-crausal"
                >
                    {data.map((sub, id) => {
                        return (
                            <div
                                className="crausal-card-subjects"
                                key={id}
                                style={{ width: "90%" }}
                            >
                                <Subcard
                                    key={id}
                                    subjectName={sub.subject}
                                    to={`contents/${sub.id}`}
                                ></Subcard>
                            </div>
                        );
                    })}
                </Carousel>
                ;
            </div>
        </div>
    );
}

export default Courses;
