import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../conponents/navbar/NavBar";
import { Outlet } from "react-router-dom";
import Search from "../../conponents/search/Search";
import Courses from "../../conponents/courses/Courses";
import RecentArticle from "../../conponents/recentArticles/RecentArticle";

function Home() {
   
    return (
        <div className="home-container">
           
            <Search />
            <Courses />
            <RecentArticle/>
        </div>
    );
}

export default Home;
