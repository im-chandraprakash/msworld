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
            <div>
                <Carousel autoplay style={{ width: "70%" }}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <Image style={{maxWidth:"100%"}} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></Image>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
