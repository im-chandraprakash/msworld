import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from "../../store/slices/SubjectSlice";
import { Button, Card, Form, Input, Typography } from "antd";
import { Divider} from "antd";
import { axiosClient } from "../../utils/axiosClient";
import "./Subjects.css";
import Subcard from "../../conponents/Subcard";
import Spinner from "../../crucial/Spinner";
import {toast} from 'react-toastify';


const { Title } = Typography;
function Subjects() {
    const [subject, setSubject] = useState(0);
    const dispatch = useDispatch();
    const data = useSelector((state) => state.subjectReducer.subjects);
    const status = useSelector((state) => state.subjectReducer.subjectStatus);

    useEffect(() => {
        dispatch(fetchSubjects());
        console.log(data);
    }, [dispatch, subject]);


    if(status === "loading"){
        return <Spinner/>
    }

    async function OnClick(key) {
        try {
           
            const response = await axiosClient.post("/sub/createSubject", {
                id: key.id,
                subject: key.subjectName,
                semester: key.sem,
            });
            
            console.log(response);
            toast.success("Subject Added SuccessFully" , {
                position:'top-right'
            });
            setSubject(subject + 1);
        } catch (error) {
            console.log(error);
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
            <Title>Subjects</Title>

            <Card
                title="Add Subject"
                bordered="true"
                className="card-subject"
                headStyle={{ fontSize: "2rem", width:"900px" }}
            >
                <Form
                    name="basic"
                    size="large"
                    className="font-size"
                    onFinish={OnClick}
                    style={{ fontSize: "5rem", width: "100%" }}
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

            <Card
            headStyle={{width:"800px"}}>
                <p>{subject}</p>
            </Card>

            <Divider orientation="center"> The Courses are : </Divider>

            <div className="grid-container" style={{paddingInline:"200px"}}>
                {data.map((sub, id) => {
                    return (
                        <Subcard
                            subjectName={sub.subject}
                            key={id}
                            className="card-course"
                            to={`/topics/${sub.id}`}
                        ></Subcard>
                        // <Card key={id} className="card-course">
                        //     <div>
                        //             <Link to= {`/topics/${sub.id}`}>
                        //                 <h2>{sub.subject} </h2>
                        //                 <h2>{sub.subject} </h2>
                        //             </Link>
                        //     </div>
                        //     <div>
                        //         Lorem ipsum, dolor sit amet consectetur
                        //         adipisicing elit. Nemo
                        //     </div>
                        // </Card>

                        
                    );
                })}
            </div>
        </div>
    );
}
export default Subjects;
