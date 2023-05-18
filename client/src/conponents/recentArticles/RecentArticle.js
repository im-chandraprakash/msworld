import { Card, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTopics } from "../../store/slices/SubjectSlice";
import { Navigate } from "react-router-dom";
import './RecentArticle.scss'
import { Link } from "react-router-dom";
// import { Direction } from "react-toastify/dist/utils";

function RecentArticle() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.subjectReducer.allTopics);
    // const data1 = data.slice(0 , 10);
    // data.splice(1);

    useEffect(() => {
        dispatch(fetchAllTopics());
    }, []);
    return (
        <div
            className="article-container"
        >

            <div>
                {data.map((article, id) => {
                    return (
                        <div key={id}>
                            <Card
                                className="map-articles"
                            >
                                <Link to={`contents/${article.subject_id}`}>
                                    <Typography.Title level={4}>
                                        {article.name}
                                    </Typography.Title>
                                </Link>

                                <Typography.Paragraph>
                                    {" "}
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Quas sunt nobis, eveniet
                                    veritatis doloremque ratione modi temporibus
                                    corrupti non aspernatur!{" "}
                                </Typography.Paragraph>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default RecentArticle;
