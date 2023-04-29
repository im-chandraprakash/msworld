import { Button, Card, Form, Input, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findTopicName, getContentLength } from "../../store/slices/SubjectSlice";
import axios from "axios";
import { axiosClient } from "../../utils/axiosClient";

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
            const response = await axiosClient.post("sub/createContent", {
              id:contentNo+1,
              topic_id,
              intro:key.intro,
              details:key.details,
              author:key.author,
            });

            console.log("the api :" , response);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="content-container" style={{ width: "50%" }}>
            {/* <Typography.Title style={{ textAlign: "center" }}> */}
            {/* {data} */}
            {/* </Typography.Title> */}
            {/* <Typography.h2>Write your content here</Typography.h2> */}
            <h1>{contentNo}</h1>
            <h2>Write your Content here please</h2>
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
                        <Form.Item
                            label="Advantages"
                            name="advantages"
                        >
                          <TextArea rows={3} />
                        </Form.Item>
                    </Card>

                    <Card>
                      <Form.Item label="Disadvantages" name="disadvantages">
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
    );
}

export default AddContent;
