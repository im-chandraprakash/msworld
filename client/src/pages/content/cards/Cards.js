import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import Typography from "antd/es/typography/Typography";

const { Title } = Typography;

function Cards({ subjectName, topicName, url, to }) {
    return (
        <div className="card-container">
            <Card
                title={subjectName}
                bordered="false"
                hoverable
                type="inner"
                size="large"
            >
            </Card>
        </div>
    );
}

function ContTitle(title) {
    return (
        <div className="title">
            <Card>
                <Typography>
                    <Title>{title}</Title>
                </Typography>
            </Card>
        </div>
    );
}
export { ContTitle };
export default Cards;
