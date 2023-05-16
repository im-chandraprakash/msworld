import React, { useEffect } from "react";
import RecentArticle from "../../conponents/recentArticles/RecentArticle";
import Footer from "../../conponents/footer/Footer";
import { Typography } from "antd";
import HomeLayout from "../../conponents/homeLayout/HomeLayout";
import "./Home.scss";
import Subcard from "../../conponents/Subcard";
import { fetchSubjects } from "../../store/slices/SubjectSlice";
import { useDispatch, useSelector } from "react-redux";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

function Home() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.subjectReducer.subjects);
    console.log("data of subjects carausal : ", data);

    useEffect(() => {
        dispatch(fetchSubjects());
    }, []);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="home-container">
            <HomeLayout />
            {/* <Search /> */}

            <div className="home-subjects">
                <div className="crausal-subjects">
                    <Typography.Title style={{textAlign:'center' , marginBottom:'50px'}}>Subjects</Typography.Title>
                    <Carousel
                        responsive={responsive}
                        className="subject-crausal"
                    >
                        {data.map((sub, id) => {
                            return (
                                <div key={id} style={{ width: "90%" }}>
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

            <div className="home-middle">
                {/* <Courses /> */}
                <Typography.Title style={{ textAlign: "center" }}>
                    Recent Articles
                </Typography.Title>
                <RecentArticle />
            </div>

            <Footer />
        </div>
    );
}

export default Home;
