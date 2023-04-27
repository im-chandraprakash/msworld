import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from "../../store/slices/SubjectSlice";
import { Button, Card, Form, Input, Typography } from "antd";
import { Col, Divider, Row } from "antd";
import { axiosClient } from "../../utils/axiosClient";
// import Typography from "antd/es/typography/Typography";
import "./Subjects.css";
import { Link } from "react-router-dom";

const { Title } = Typography;
function Subjects() {
    const [subject, setSubject] = useState();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.subjectReducer.subjects);

    useEffect(() => {
        dispatch(fetchSubjects());
        console.log(data);
    }, [dispatch]);


    async function OnClick(key) {
        try {
            setSubject(key.subjectName);
            const response = await axiosClient.post("/sub/createSubject", {
                subject: key.subjectName,
            });

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="subject-container">
            <Title>Subjects</Title>

            <Card
                title="Add Subject"
                bordered="true"
                headStyle={{ fontSize: "2rem" }}
            >
                <Form
                    name="basic"
                    size="large"
                    className="font-size"
                    onFinish={OnClick}
                    style={{ fontSize: "5rem" }}
                >
                    <Form.Item
                        label="Enter Subject Name :"
                        name="subjectName"
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

            <Card>
                <p>{subject}</p>
            </Card>

            <Divider orientation="center"> The Courses are : </Divider>

            <div className="grid-container">
                {data.map((sub, id) => {
                    return <Card className="card-course">
                        <div>
                            <Link to={{
                                pathname:"/topics",
                                state:sub.subject,
                            }}><h2>{sub.subject} </h2></Link>
                        </div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                        </div>
                    </Card>;
                })}
            </div>
        </div>
    );
}
export default Subjects;
