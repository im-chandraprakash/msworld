import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from "../../store/slices/SubjectSlice";
import { Button, Card, Form, Input, Typography } from "antd";
import { Col, Divider, Row } from "antd";
import { axiosClient } from "../../utils/axiosClient";
// import Typography from "antd/es/typography/Typography";
import "./Subjects.css";
import { Link, useNavigate } from "react-router-dom";

const { Title } = Typography;
function Subjects() {
    const [subject, setSubject] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.subjectReducer.subjects);

    useEffect(() => {
        dispatch(fetchSubjects());
        console.log(data);
    }, [dispatch, subject]);

    async function OnClick(key) {
        try {
           
            setSubject(subject + 1);
            const response = await axiosClient.post("/sub/createSubject", {
                id: key.id,
                subject: key.subjectName,
                semester: key.sem,
            });

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    // function ButtonClicked(data){
    //     console.log(data);
    //     navigate('/topics',{state:{id:1234 , color:"blue"}});
    // }
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
                        label="Subject ID"
                        name="id"
                        rules={[
                            {
                                required: true,
                                message: "Please enter Subject Id",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Semester "
                        name="sem"
                        rules={[
                            {
                                required: true,
                                message: "Please enter Semester No.",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Subject Name :"
                        name="subjectName"
                        className="font-size"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your Subject Name!",
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
                    return (
                        <Card key={id} className="card-course">
                            <div>
                                    <Link to= {`/topics/${sub.id}`}>
                                        <h2>{sub.subject} </h2>
                                    </Link>
                            </div>
                            <div>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Nemo
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
export default Subjects;
