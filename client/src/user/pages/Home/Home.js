import React, { useEffect } from "react";
import RecentArticle from "../../components/recentArticles/RecentArticle";
import Footer from "../../components/footer/Footer";
import { Typography } from "antd";
import LandingPage from "../../components/landing page/LandingPage";
import "./Home.scss";
import Courses from "../../components/courses/Courses";

function Home() {
    return (
        <div className="home-container">
            <LandingPage />
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
