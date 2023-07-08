import React from "react";
import "./LandingPage.scss";
import { Typography, Image, Button } from "antd";
// import Search from "../../../user/conponents/search/Search";
import Search from "../search/Search";
import Typewriter from "typewriter-effect";

function LandingPage() {
    return (
        <div className="home-design">
            <div className="left-part">
                <div className="left-div">
                    <div className="typewriter-effect">
                        {/* <h1> */}

                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                wrapperClassName: "type-writer",
                                cursorClassName: "cursor-type-writer",
                                strings: [
                                    "Prepare with curated materials.",
                                    "Boost your exam performance.",
                                    "Stay updated with resources.",
                                ],
                            }}
                        />
                    </div>
                    <Typography.Title className="sub-heading">
                        Maximize Your Exam Success: Unleash Your Learning
                        Potential
                    </Typography.Title>
                    <Typography.Paragraph className="about-app-para" level={3}>
                        {" "}
                        Resource for comprehensive exam preparation materials
                        and high-quality Notes. Boost your academic success with
                        our curated content and interactive features. Ace your
                        exams with confidence using our trusted educational
                        platform.
                    </Typography.Paragraph>
                    <Search />
                </div>
            </div>
            <div className="right-part">
                <div className="div-element-image">
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
        </div>
    );
}

export default LandingPage;
