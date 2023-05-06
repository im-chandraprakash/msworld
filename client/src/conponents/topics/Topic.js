import React, { useEffect, useState } from "react";
import { Button, Card, Form, Input } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchTopics, getTopicLength } from "../../store/slices/SubjectSlice";
import { useDispatch, useSelector } from "react-redux";
import { axiosClient } from "../../utils/axiosClient";
import "./Topic.scss";
import Spinner from "../../crucial/Spinner";
import {toast} from 'react-toastify';
import Typography from "antd/es/typography/Typography";



function Topic() {
    const { subject_id } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const {subjectName} = location.state ? location.state : "";
    const data = useSelector((state) => state.subjectReducer.topics);
    const status = useSelector((state) => state.subjectReducer.topicStatus);
    const topicLength = useSelector(
        (state) => state.subjectReducer.topicLength
    );

    const [topicNo, setTopicNo] = useState(topicLength);

    useEffect(() => {
        try {
            console.log(subject_id);
            dispatch(
                fetchTopics({
                    subject_id,
                })
            );
            dispatch(getTopicLength());
            setTopicNo(topicLength);
        } catch (e) {
            console.log(e);
        }
    }, [dispatch, topicNo, topicLength]);


    if(status === "loading"){
        return <Spinner/>
    }

    async function OnClick(key) {
        try {
            setTopicNo(topicLength);
            const response = await axiosClient.post("/sub/createTopic", {
                id: topicNo + 1,
                subject_id: subject_id,
                name: key.topicName,

                // id: "6",
                // subject_id: "400",
                // name: "second program",
            });
            toast.success(`${key.topicName} Added Successfully`,{
                position:'top-right'
            })
            setTopicNo(topicLength + 1);
        } catch (e) {
            console.log(e);
             toast.error("something went wrong", {
                 position: "top-right",
             });
        }
    }
    return (
        <div className="topic-container">
            <Typography.Title>Subject : {subjectName} </Typography.Title>

            <div className="topic-subContainer">
                <h1 className="items">{}</h1>
                <h2>{topicNo}</h2>
                <Card
                    title="Add Subject Topics"
                    bordered="true"
                    headStyle={{ fontSize: "1.5rem" }}
                >
                    <Form
                        name="basic"
                        size="large"
                        className="font-size"
                        onFinish={OnClick}
                    >
                        <Form.Item
                            label="Enter Topic Name :"
                            name="topicName"
                            className="font-size"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>

                {data.map((topic, id) => {
                    return (
                        <Card key={id} className="topics">
                            <Link
                                to={`${topic.id}`}
                                state={{ topicName: topic.name }}
                            >
                                {topic.name}
                            </Link>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default Topic;
