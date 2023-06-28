import { Button, Card, Form, Input, Space, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
    findTopicName,
    getContentLength,
} from "../../../shared/store/slices/SubjectSlice";

import { axiosClient } from "../../../shared/utils/axiosClient";
import "./AddContent.scss";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

import "./AddContent.scss";

function AddContent() {
    const dispatch = useDispatch();
    const [image, setImage] = useState("");
    const { topic_id } = useParams();
    const location = useLocation();
    const { topicName } = location.state ? location.state : "";
    const data = useSelector((state) => state.subjectReducer.topicName);
    const contentNo = useSelector(
        (state) => state.subjectReducer.contentLength
    );

    // console.log(data);
    // console.log("Link props is : ", topicName);

    useEffect(() => {
        dispatch(findTopicName({ id: topic_id }));
        dispatch(getContentLength());
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            if (fileReader.readyState === fileReader.DONE) {
                setImage(fileReader.result);
                // console.log("img data", fileReader.result);
            }
        };
    };

    async function onSubmit(key) {
        try {
            // console.log(key);
            const response = await axiosClient.post("/cse/createContent", {
                id: contentNo + 1,
                topic_id,
                intro: key.intro,
                details: key.details,
                content: key.content,
                image: image,
                advantages: key.advantages,
                disadvantages: key.disadvantages,
                author: key.author,
            });
            toast.success("Content Added SuccessFully", {
                position: "top-right",
            });
            // console.log("the api :", response);
        } catch (e) {
            // console.log(e);
            toast.error("something went wrong", {
                position: "top-right",
            });
        }
    }
    return (
        <div className="content-container">
            <div className="subContainer">
                <Typography.Title className="head-tittle">
                    Topic Name : {topicName}
                </Typography.Title>
                {/* <Typography.Title level={2}>Write your Content here : </Typography.Title> */}

                <Form onFinish={onSubmit} size="large" className="content-form">
                    <Card>
                        <Typography.Title level={4}>
                            Introduction
                        </Typography.Title>
                        <Form.Item
                            // label="Introduction"
                            className="form-item"
                            name="intro"
                            rules={[
                                {
                                    required: true,
                                    message: "can't be empty",
                                },
                            ]}
                        >
                            <TextArea className="form-text-area" rows={5} />
                            {/* <Input /> */}
                        </Form.Item>
                    </Card>

                    <Card>
                        <Typography.Title level={4}>
                            Extra Field
                        </Typography.Title>
                        <Form.List name="content">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(
                                        ({ key, name, ...restField }) => (
                                            <Card key={key}>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "heading"]}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message:
                                                                "Can't be heading empty",
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        placeholder="heading"
                                                        className="field-item-head"
                                                    />
                                                </Form.Item>
                                                <Form.Item
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
                                                    <TextArea
                                                        className="field-item-about"
                                                        placeholder="about heading ... "
                                                        rows={1}
                                                    />
                                                </Form.Item>
                                                <Button
                                                    onClick={() => remove(name)}
                                                    type="primary"
                                                    danger
                                                >
                                                    {" "}
                                                    delete
                                                </Button>
                                            </Card>
                                        )
                                    )}
                                    <Form.Item className="form-item">
                                        <Button
                                            className="form-text-area"
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

                    <Card size="large">
                        <Typography.Title level={4}>Add image</Typography.Title>
                        <div className="input-post-img">
                            <label htmlFor="inputImg" className="labelImg">
                                <BsCardImage />
                            </label>
                            <input
                                className="inputImg"
                                id="inputImg"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                    </Card>

                    <Card>
                        <Typography.Title level={4}>
                            Add Details
                        </Typography.Title>
                        <Form.Item
                            name="details"
                            className="form-item"
                            rules={[
                                {
                                    required: true,
                                    message: "can't be empty",
                                },
                            ]}
                        >
                            <TextArea className="form-text-area" rows={5} />
                        </Form.Item>
                    </Card>

                    <Card>
                        <Typography.Title level={4}>
                            Advantages
                        </Typography.Title>
                        <Form.List name="advantages">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(
                                        ({ key, name, ...restField }) => (
                                            <Space
                                                className="advantage-space"
                                                key={key}
                                                align="baseline"
                                            >
                                                <Form.Item
                                                    className="advantage-field"
                                                    {...restField}
                                                    name={[name, "points"]}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message:
                                                                "field can't empty",
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder="Advantages" />
                                                </Form.Item>

                                                <MinusCircleOutlined
                                                    onClick={() => remove(name)}
                                                />
                                            </Space>
                                        )
                                    )}
                                    <Form.Item className="form-item">
                                        <Button
                                            className="form-text-area"
                                            type="dashed"
                                            onClick={() => add()}
                                            block
                                            icon={<PlusOutlined />}
                                        >
                                            Add Advantages
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Card>

                    <Card>
                        <Typography.Title level={4}>
                            Disadvantages
                        </Typography.Title>
                        <Form.List name="disadvantages">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(
                                        ({ key, name, ...restField }) => (
                                            <Space
                                                key={key}
                                                align="baseline"
                                                className="disadvantage-space"
                                            >
                                                <Form.Item
                                                    className="disadvantage-field"
                                                    {...restField}
                                                    name={[name, "points"]}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message:
                                                                "field can't empty",
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder="Disadvantages" />
                                                </Form.Item>

                                                <MinusCircleOutlined
                                                    onClick={() => remove(name)}
                                                />
                                            </Space>
                                        )
                                    )}
                                    <Form.Item className="form-item">
                                        <Button
                                            className="form-text-area"
                                            type="dashed"
                                            onClick={() => add()}
                                            block
                                            icon={<PlusOutlined />}
                                        >
                                            Add Disadvantages
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Card>

                    <Card>
                        <Typography.Title level={4}>
                            Author Name
                        </Typography.Title>
                        <Form.Item name="author" className="form-item">
                            <Input className="form-text-area" />
                        </Form.Item>
                    </Card>

                    <Form.Item className="submit-btn">
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ textAlign: "end" }}
                        >
                            submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default AddContent;
