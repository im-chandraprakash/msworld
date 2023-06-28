import Typography from "antd/es/typography/Typography";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./AddQuiz.scss";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
import { axiosClient } from "../../../shared/utils/axiosClient";
import { toast } from "react-toastify";

function AddQuiz() {
    const { id } = useParams();
    const [question, setQuestion] = useState();

    const onFinish = async (values) => {
        // console.log("Received values of form:", values);
        // console.log("Received values of form:", values.quizQuestions);
        setQuestion(values.quizQuestions);

        // console.log("question :", question);

        const response = await axiosClient.put("quiz/addQuizQuestions", {
            quizQuestions: question,
            id: 10,
        });

        toast.success("Question Added SuccessFully", {
            position: "top-right",
        });

        // console.log("final :", response);
    };
    return (
        <div className="addQuiz-container">
            <Typography.Title>Add Your Questions</Typography.Title>
            <div className="quiz-questions">
                <Form
                    name="dynamic_form_nest_item"
                    onFinish={onFinish}
                    className="antd-form-quiz"
                    autoComplete="off"
                >
                    <Form.List name="quizQuestions">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Space
                                        // size={20}
                                        className="space-element"
                                        direction="vertical"
                                        key={key}
                                        align="baseline"
                                    >
                                        <Form.Item
                                            {...restField}
                                            name={[name, "question"]}
                                            label={
                                                <p className="q-label">
                                                    Question-{key + 1}
                                                </p>
                                            }
                                            className="question"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Missing Question Name",
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Question"
                                                className="q-input"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            className="option"
                                            {...restField}
                                            name={[name, "a"]}
                                            label={<p className="label">a</p>}
                                        >
                                            <Input
                                                placeholder="option1"
                                                className="input"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            className="option"
                                            label={<p className="label">b</p>}
                                            name={[name, "b"]}
                                        >
                                            <Input
                                                placeholder="option2"
                                                className="input"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label={<p className="label">c</p>}
                                            className="option"
                                            {...restField}
                                            name={[name, "c"]}
                                        >
                                            <Input
                                                placeholder="option 3"
                                                className="input"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label={<p className="label">d</p>}
                                            className="option"
                                            {...restField}
                                            name={[name, "d"]}
                                        >
                                            <Input
                                                placeholder="option 4"
                                                className="input"
                                            />
                                        </Form.Item>{" "}
                                        <Form.Item
                                            {...restField}
                                            name={[name, "answer"]}
                                            label={
                                                <p className="A-label">
                                                    Answer
                                                </p>
                                            }
                                            className="answer"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Missing Answer",
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Question"
                                                className="q-input"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            className="item-delete-btn"
                                            type="danger"
                                            onClick={() => remove(name)}
                                        >
                                            delete
                                        </Form.Item>
                                    </Space>
                                ))}
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
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="quiz-create-btn"
                        >
                            Crate
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default AddQuiz;
