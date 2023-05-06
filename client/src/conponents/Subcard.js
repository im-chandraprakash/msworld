import React from "react";
import "./Subcard.css";
import { Link } from "react-router-dom";
import { Avatar, Card } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
function Subcard({subjectName , topicName , url , to}) {
    return (
        <div className="card-container">
            <Card
                title={subjectName}
                bordered="false"
                hoverable
                type="inner"
                size="large"
            >
                <Meta
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "15px",
                        justifyContent: "center",
                    }}
                    avatar={
                        <Avatar size={70} src="https://shorturl.at/tERWZ" />
                    }
                    title={<Link to={to} state={{subjectName,}}>{subjectName}</Link>}
                    description="welcome to the introduction of a data structurea and algorithm here we deep dive into the the new world"
                ></Meta>
            </Card>
        </div>
    );
}

export default Subcard;
