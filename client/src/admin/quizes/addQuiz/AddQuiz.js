import Typography from "antd/es/typography/Typography";
import React from "react";
import { useParams } from "react-router-dom";
import "./AddQuiz.scss";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";

function AddQuiz() {
    const { id } = useParams();

    const onFinish = (values) => {
        console.log("Received values of form:", values);
    };
    return (
        <div className="addQuiz-container">
            <Typography.Title>Add Your Questions</Typography.Title>
            <div className="quiz-questions">
                <Form
                    name="dynamic_form_nest_item"
                    onFinish={onFinish}
                    className="antd-form"
                    style={{
                        maxWidth: 600,
                    }}
                    autoComplete="off"
                >
                    <Form.List name="users">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Space
                                        // size={20}
                                        className="space-element"
                                        direction="vertical"
                                        key={key}
                                        style={{
                                            display: "flex",
                                            marginBottom: 8,
                                        }}
                                        align="baseline"
                                    >
                                        <Form.Item
                                            {...restField}
                                            name={[name, `Question${key}`]}
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
                                            name={[name, "option1"]}
                                            label={
                                                <p className="label">
                                                    option-1
                                                </p>
                                            }
                                        >
                                            <Input
                                                placeholder="option1"
                                                className="input"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            {...restField}
                                            className="option"
                                            label={
                                                <p className="label">
                                                    option-2
                                                </p>
                                            }
                                            name={[name, "option2"]}
                                        >
                                            <Input
                                                placeholder="option2"
                                                className="input"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            label={
                                                <p className="label">
                                                    option-3
                                                </p>
                                            }
                                            className="option"
                                            {...restField}
                                            name={[name, "option3"]}
                                        >
                                            <Input
                                                placeholder="option 3"
                                                className="input"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label={
                                                <p className="label">
                                                    option-2
                                                </p>
                                            }
                                            className="option"
                                            {...restField}
                                            name={[name, "option4"]}
                                        >
                                            <Input
                                                placeholder="option 4"
                                                className="input"
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
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default AddQuiz;
