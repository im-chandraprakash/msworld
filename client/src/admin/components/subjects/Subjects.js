import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from "../../../shared/store/slices/SubjectSlice";
import { Button, Card, Form, Input, Typography } from "antd";
import { Divider } from "antd";
import { axiosClient } from "../../../shared/utils/axiosClient";
import "./Subjects.scss";
// import Subcard from "../../conponents/Subcard";
import Spinner from "../../../shared/templates/Spinner";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";

const { Title } = Typography;
function Subjects() {
    const [subject, setSubject] = useState(0);
    const dispatch = useDispatch();
    const data = useSelector((state) => state.subjectReducer.subjects);
    const status = useSelector((state) => state.subjectReducer.subjectStatus);

    console.log("subject data is : ", data);

    useEffect(() => {
        dispatch(fetchSubjects());
        // console.log(data);
    }, [dispatch, subject]);

    if (status === "loading") {
        return <Spinner />;
    }

    async function OnClick(key) {
        try {
            const response = await axiosClient.post("/cse/createSubject", {
                id: key.id,
                subject: key.subjectName,
                semester: key.sem,
                description: key.description,
            });

            // console.log(response);
            toast.success("Subject Added SuccessFully", {
                position: "top-right",
            });
            setSubject(subject + 1);
        } catch (error) {
            // console.log(error);
            toast.error("something went wrong", {
                position: "top-right",
            });
        }
    }

    // function ButtonClicked(data){
    //     console.log(data);
    //     navigate('/topics',{state:{id:1234 , color:"blue"}});
    // }
    return (
        <div className="subject-container">
            <Title className="title-name">Subjects</Title>

            <Card
                bordered="true"
                className="card-subject"
            >
                <Form
                    name="basic"
                    className="subject-form"
                    onFinish={OnClick}
                >
                    <Form.Item
                        className="form-item"
                        label={<p className="form-item-label">Subject ID</p>}
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
                        className="form-item"
                        label={<p className="form-item-label">Semester</p>}
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
                        label={<p className="form-item-label">Subject Name</p>}
                        name="subjectName"
                        className="form-item"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your Subject Name!",
                            },
                        ]}
                    >
                        <div className="form-input-div">
                            <Input className="form-input" />
                        </div>
                    </Form.Item>

                    <Form.Item
                        label={
                            <p className="form-item-label">
                                Subject Description
                            </p>
                        }
                        name="description"
                        className="form-item"
                        rules={[
                            {
                                required: true,
                                message:
                                    "Give short Description about Subjects",
                            },
                        ]}
                    >
                        <div className="form-input-div">
                            <TextArea className="form-input" />
                        </div>
                        
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="create-btn">
                            Create
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

            <Divider orientation="center"> The Courses are : </Divider>

            <div className="grid-container">
                {data.map((sub, id) => {
                    return (
                        <div className="card-div-subjects" key={id}>
                            <div className="card-img">
                                <img
                                    src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
                                    alt="subject image"
                                />
                            </div>
                            <div className="subject-card-about">
                                <Link
                                    className="link link-btn"
                                    to={`${sub.id}`}
                                >
                                    {sub.subject}
                                </Link>

                                {sub?.description ? (
                                    <p>{sub?.description}</p>
                                ) : (
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Impedit, maxime.
                                        Perferendis natus maiores eaque ad.
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Subjects;
