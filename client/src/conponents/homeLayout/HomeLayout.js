import React from "react";
import "./HomeLayout.scss";
import { Typography, Image, Button } from "antd";
import Search from "../search/Search";
import Typewriter from "typewriter-effect";

function HomeLayout() {
    return (
        <div className="home-design">
            <div className="left-part">
                <div>
                    <div>
                        {/* <h1> */}

                        <Typewriter
                            style={{ fontSize: "5rem" }}
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                wrapperClassName:"type-writer",
                                strings: [
                                    "Welcome to Our Website.",
                                    "We are Helping Students.",
                                    "To achive Good Marks.",
                                ],
                            }}
                        />
                        {/* </h1> */}
                    </div>
                    <Typography.Title >
                        Your Examination Score is Our Achievement{" "}
                    </Typography.Title>
                    <Typography.Paragraph
                        style={{ fontSize: "1.1rem", width: "90%" }}
                        level={3}
                    >
                        {" "}
                        Our MsWorld Website will you All content you need to
                        score great marks in Exam. Here you will get Every
                        Branch subject as per CSVTU Syllabus in this platform.
                        You don't need to worry about Notes , Quesiton paper ,
                        Everything your need is here so make sure you will give
                        your important time for preparing examination
                    </Typography.Paragraph>

                    <Button type="primary">Explore</Button>
                    <Search />
                </div>
            </div>
            <div className="right-part">
                <div className="div-element">
                    <img
                        src="/msWorldPicture.png"
                        width={400}
                        height={500}
                        alt="study Logo"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeLayout;
