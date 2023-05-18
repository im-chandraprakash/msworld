import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./Quiz.scss";
import { Button, Card, Modal, Typography } from "antd";
import { axiosClient } from "../../utils/axiosClient";
import { useDispatch, useSelector } from "react-redux";
import { allQuizes } from "../../store/slices/QuizSlice";
import Subcard from "../../conponents/Subcard";
import { Link } from "react-router-dom";

function Quiz() {
    const [quiz, setQuiz] = useState(false);
    const [quizName, setQuizName] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const dispatch = useDispatch();
    const data = useSelector((state) => state.quizReducer.allQuizes);

    console.log("data", data);
    useEffect(() => {
        dispatch(allQuizes());
    }, []);

    const showModel = () => {
        setQuiz(true);
    };

    const handleOk = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post("/quiz/createQuiz", {
                id: 1,
                name: quizName,
                startTime,
                endTime,
            });

            setQuiz(false);
        } catch (erro) {
            console.log(e);
        } finally {
            setQuizName("");
        }
    };
    const handleCancel = () => {
        setQuiz(false);
    };
    return (
        <div className="quiz-container">
            <div className="plus-icon-div">
                <AiOutlinePlus className="plus-icon" onClick={showModel} />

                <Modal
                    open={quiz}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <Button
                            type="primary"
                            onClick={handleOk}
                            key="create-button"
                        >
                            Create
                        </Button>,
                    ]}
                >
                    <form onSubmit={handleOk}>
                        {/* // Sign Up Name --------------------------------------------------------- */}
                        <label>
                            {
                                <Typography.Title level={4}>
                                    Quiz Name :
                                </Typography.Title>
                            }
                        </label>
                        <input
                            type="text"
                            className="quiz-name-input"
                            onChange={(e) => {
                                setQuizName(e.target.value);
                            }}
                        />
                        <label>
                            {
                                <Typography.Title level={4}>
                                    Start time :
                                </Typography.Title>
                            }
                        </label>
                        <input
                            type="number"
                            className="start-time-input"
                            onChange={(e) => {
                                setStartTime(e.target.value);
                            }}
                        />
                        <label>
                            {
                                <Typography.Title level={4}>
                                    End time :
                                </Typography.Title>
                            }
                        </label>
                        <input
                            type="number"
                            className="quiz-name-input"
                            onChange={(e) => {
                                setEndTime(e.target.value);
                            }}
                        />
                    </form>
                </Modal>

                {/* <div>
                    {Array.isArray(data)
                        ? data.map((val, id) => {
                              return <div key={id}></div>;
                          })
                        : console.log("hello")}
                </div> */}
            </div>

            <div className="all-quizs">
                {data.map((val, id) => {
                    return (
                        <div className="quiz-div">
                            <Card className="quiz-card">
                                <div>
                                    <img
                                        src="https://nie-images.s3.amazonaws.com/gall_content/2017/6/2017_6$largeimg20_Jun_2017_124615393.jpg"
                                        alt="quiz image"
                                    />
                                </div>

                                <div className="quiz-about">
                                    <Typography.Title level={4}>
                                        {val.name}
                                    </Typography.Title>
                                    <Link className="select-link" type="primary" to={`${val.id}`} >select</Link>
                                </div>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Quiz;
