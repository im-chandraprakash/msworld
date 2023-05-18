import React from "react";
// import "./Subcard.css";
import { Link } from "react-router-dom";
import { Avatar, Button, Card, Typography } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import "./Subcard.scss";
function Subcard({ subjectName, topicName, url, to }) {
    return (
        <div className="card-container">
            <Card
                className="subject-card"
                bordered="false"
                hoverable
                type="inner"
                size="large"
            >
                <div className="subcard-div">
                    <div className="subcard-img">
                        <img
                            src="https://shorturl.at/tERWZ"
                            alt={subjectName}
                        />
                    </div>

                    <div className="subcard-about">
                        <div>
                            <Typography.Title level={2} className="subcard-about-head">
                                {subjectName}
                            </Typography.Title>
                            <Typography.Paragraph>
                                {" "}
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ea dolorum soluta delectus
                                quam eveniet ipsam doloremque aperiam, aut
                                excepturi debitis!{" "}
                            </Typography.Paragraph>

                            <Link  type="primary" to={to} state={{ subjectName }}>
                                <Button type="primary" className="reading-btn"> 
                                Start Reading
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Subcard;
