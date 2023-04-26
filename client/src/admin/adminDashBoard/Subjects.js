import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from "../../store/slices/SubjectSlice";
import { Button, Card, Form, Input } from "antd";
import { axiosClient } from "../../utils/axiosClient";
function Subjects() {
    const [subject, setSubject] = useState();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.subjectReducer.subjects);

    useEffect(() => {
        dispatch(fetchSubjects());
    }, [dispatch]);

     async function OnClick(key) {

        try {
            setSubject(key.subjectName);
            const response = await axiosClient.post("/sub/createSubject", {
                subject:key.subjectName,
            });

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <h2>Subjects</h2>

            <Card title="Add Subject" bordered="true">
                <Form name="basic" size="large" onFinish={OnClick}>
                    <Form.Item
                        label="Enter Subject Name :"
                        name="subjectName"
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

            {data.map((sub, id) => {
                return <Card key={id}>{sub.subject}</Card>;
            })}
        </div>
    );
}

export default Subjects;
