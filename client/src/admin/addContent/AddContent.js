import { Button, Card, Form, Input, Space, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    findTopicName,
    getContentLength,
} from "../../store/slices/SubjectSlice";
import axios from "axios";
import { axiosClient } from "../../utils/axiosClient";
import "./AddContent.scss";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

function AddContent() {
    const dispatch = useDispatch();
    const { topic_id } = useParams();
    const data = useSelector((state) => state.subjectReducer.topicName);
    const contentNo = useSelector(
        (state) => state.subjectReducer.contentLength
    );

    console.log(data);

    useEffect(() => {
        dispatch(findTopicName({ id: topic_id }));
        dispatch(getContentLength());
    }, []);

    async function onSubmit(key) {
        try {
            // console.log(key.content);
            const temp = key.content;
            console.log(temp);
            const response = await axiosClient.post("sub/createContent", {
                id: contentNo + 1,
                topic_id,
                intro: key.intro,
                details: key.details,
                content:key.content,
                author: key.author,
            });

            console.log("the api :", response);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="content-container">
            <div className="subContainer">
                <h2>Write your Content here : </h2>
                <Card title={data}>
                    <Form onFinish={onSubmit} size="large">
                        <Card>
                            <Form.Item
                                label="Introduction"
                                name="intro"
                                rules={[
                                    {
                                        required: true,
                                        message: "can't be empty",
                                    },
                                ]}
                            >
                                <TextArea rows={5} />
                                {/* <Input /> */}
                            </Form.Item>
                        </Card>

                        <Card>
                            <Form.List name="content">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(
                                            ({ key, name, ...restField }) => (
                                                <Card
                                                    key={key}
                                                    style={{
                                                        display: "flex",
                                                        marginBottom: 8,
                                                        flexDirection: "column",
                                                        alignItems: "stretch",
                                                        justifyContent:
                                                            "center",
                                                    }}
                                                >
                                                    <Form.Item
                                                        {...restField}
                                                        style={{ width: "50%" }}
                                                        name={[
                                                            name,
                                                            "heading",
                                                        ]}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Can't be heading empty",
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder="heading" />
                                                    </Form.Item>
                                                    <Form.Item
                                                        style={{ width: "90%" }}
                                                        {...restField}
                                                        name={[name, "about"]}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Can't be empty",
                                                            },
                                                        ]}
                                                    >
                                                        <TextArea placeholder="about heading ... " rows={1} />
                                                    </Form.Item>
                                                    <Button
                                                        onClick={() =>
                                                            remove(name)
                                                        }
                                                        type="primary"
                                                        danger
                                                    >
                                                        {" "}
                                                        delete
                                                    </Button>
                                                </Card>
                                            )
                                        )}
                                        <Form.Item>
                                            <Button
                                                type="dashed"
                                                onClick={() => add()}
                                                block
                                                icon={<PlusOutlined />}
                                            >
                                                Add field
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                        </Card>

                        <Card>
                            <Form.Item
                                label="Details About Topic "
                                name="details"
                                rules={[
                                    {
                                        required: true,
                                        message: "can't be empty",
                                    },
                                ]}
                            >
                                <TextArea rows={5} />
                            </Form.Item>
                        </Card>

                        <Card>
                            <Form.Item label="Advantages" name="advantages">
                                <TextArea rows={3} />
                            </Form.Item>
                        </Card>

                        <Card>
                            <Form.Item
                                label="Disadvantages"
                                name="disadvantages"
                            >
                                <TextArea rows={3} />
                            </Form.Item>
                        </Card>

                        <Card>
                            <Form.Item label="Author name" name="author">
                                <Input />
                            </Form.Item>
                        </Card>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ textAlign: "end" }}
                            >
                                submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    );
}

export default AddContent;
