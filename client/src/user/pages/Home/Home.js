import React, { useEffect } from "react";
import RecentArticle from "../../components/recentArticles/RecentArticle";
import Footer from "../../components/footer/Footer";
import { Typography } from "antd";
// import HomeLayout from "../../conponents/homeLayout/HomeLayout";
import HomeLayout from "../../components/homeLayout/HomeLayout";
import "./Home.scss";
// import Courses from "../../conponents/courses/Courses";
import Courses from "../../components/courses/Courses";

function Home() {
    return (
        <div className="home-container">
            <HomeLayout />
            <Courses />
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
