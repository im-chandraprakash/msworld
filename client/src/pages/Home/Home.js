import React from "react";
import Search from "../../conponents/search/Search";
import Courses from "../../conponents/courses/Courses";
import RecentArticle from "../../conponents/recentArticles/RecentArticle";
import Footer from "../../conponents/footer/Footer";
import { Carousel } from "antd";
import {Image} from 'antd';

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
            <Search />
            <Courses />
            <RecentArticle />
            <Footer />
        </div>
    );
}

export default Home;
