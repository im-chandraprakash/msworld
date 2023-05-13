import React from "react";
import Search from "../../conponents/search/Search";
import Courses from "../../conponents/courses/Courses";
import RecentArticle from "../../conponents/recentArticles/RecentArticle";
import Footer from "../../conponents/footer/Footer";
import { Typography } from "antd";
import HomeLayout from "../../conponents/homeLayout/HomeLayout";
import './Home.scss'

function Home() {
   

    const contentStyle = {

        height: "600px",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
    };
    return (
        <div className="home-container">

            <HomeLayout/>
            {/* <Search /> */}
            
            <Courses />
            <Typography.Title style={{textAlign:'center'}}>Recent Articles</Typography.Title>
            <RecentArticle />
            <Footer />
        </div>
    );
}

export default Home;
