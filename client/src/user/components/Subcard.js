import React from "react";
// import "./Subcard.css";
import { Link } from "react-router-dom";
import { Avatar, Button, Card, Typography } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import "./Subcard.scss";
// import subImg  from '../../../public/images/tree.png'
function Subcard({ subjectName, topicName, url, to, btnName , desc }) {
    return (
        <div className="card-container">
            <Card
                className="subject-card"
                bordered="false"
                hoverable
                type="inner"
            >
                <div className="subcard-div">
                    <div className="subcard-img">
                        <img
                            src="images\tree.png"
                            alt={subjectName}
                        />
                    </div>

                    <div className="subcard-about">
                        <div>
                            <div>
                                <Typography.Title
                                    level={4}
                                    className="subcard-about-head"
                                >
                                    {subjectName}
                                </Typography.Title>
                                <Typography.Paragraph>
                                  {desc}
                                </Typography.Paragraph>
                            </div>

                            <div>
                                <Link
                                    type="primary"
                                    to={to}
                                    state={{ subjectName }}
                                    className="card-btn-link"
                                >
                                    <Button
                                        type="primary"
                                        className="reading-btn"
                                    >
                                        {btnName ? btnName : "Start Reading"}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Subcard;
