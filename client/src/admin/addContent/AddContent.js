import { Button, Card, Form, Input, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import {BsCardImage} from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    findTopicName,
    getContentLength,
} from "../../store/slices/SubjectSlice";

import { axiosClient } from "../../utils/axiosClient";
import "./AddContent.scss";
import {
    PlusOutlined,
    MinusCircleOutlined,
} from "@ant-design/icons";
import {toast} from 'react-toastify';

function AddContent() {
    const dispatch = useDispatch();
    const [image ,setImage] = useState("");
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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            if (fileReader.readyState === fileReader.DONE) {
                setImage(fileReader.result);
                console.log("img data", fileReader.result);
            }
        };
    };

    

    async function onSubmit(key) {
        try {

            console.log(key);
            const response = await axiosClient.post("sub/createContent", {
                id: contentNo + 1,
                topic_id,
                intro: key.intro,
                details: key.details,
                content: key.content,
                image:image,
                advantages: key.advantages,
                disadvantages: key.disadvantages,
                author: key.author,
            });
            toast.success("Content Added SuccessFully" , {
                position:'top-right',
            })
            console.log("the api :", response);
        } catch (e) {
            console.log(e);
            toast.error("something went wrong" , {
                position:'top-right',
            })
        }
    }
    return (
        <div className="content-container">
            <div className="subContainer">
                <h1>{topic_id}</h1>
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
                                                        name={[name, "heading"]}
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
                                                        <TextArea
                                                            placeholder="about heading ... "
                                                            rows={1}
                                                        />
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
                            <Form.List name="advantages">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(
                                            ({ key, name, ...restField }) => (
                                                <Space
                                                    key={key}
                                                    style={{
                                                        display: "flex",
                                                        marginBottom: 8,
                                                    }}
                                                    align="baseline"
                                                >
                                                    <Form.Item
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
                                                        onClick={() =>
                                                            remove(name)
                                                        }
                                                    />
                                                </Space>
                                            )
                                        )}
                                        <Form.Item>
                                            <Button
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
                            <Form.List name="disadvantages">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(
                                            ({ key, name, ...restField }) => (
                                                <Space
                                                    key={key}
                                                    style={{
                                                        display: "flex",
                                                        marginBottom: 8,
                                                    }}
                                                    align="baseline"
                                                >
                                                    <Form.Item
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
                                                        onClick={() =>
                                                            remove(name)
                                                        }
                                                    />
                                                </Space>
                                            )
                                        )}
                                        <Form.Item>
                                            <Button
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
                            <Form.Item label="Author name" name="author">
                                <Input />
                            </Form.Item>
                        </Card>

                        {/* <Form.Item
                            name="upload"
                            label="Upload"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            extra="longgggggggggggggggggggggggggggggggggg"
                        >
                            <Upload
                                name="logo"
                                action="/upload.do"
                                listType="picture"
                            >
                                <Button icon={<UploadOutlined />}>
                                    Click to upload
                                </Button>
                            </Upload>
                        </Form.Item> */}

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
