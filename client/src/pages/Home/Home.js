import React, { useEffect } from "react";
import RecentArticle from "../../conponents/recentArticles/RecentArticle";
import Footer from "../../conponents/footer/Footer";
import { Typography } from "antd";
import HomeLayout from "../../conponents/homeLayout/HomeLayout";
import "./Home.scss";
import Subcard from "../../conponents/Subcard";
import { fetchSubjects } from "../../store/slices/SubjectSlice";
import { useDispatch, useSelector } from "react-redux";
import Courses from "../../conponents/courses/Courses";


function Home() {
    

    return (
        <div className="home-container">
            <HomeLayout />
            <Courses/>
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
