import { Card, Pagination, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchAllTopics } from "../../store/slices/SubjectSlice";
import { fetchAllTopics } from "../../../shared/store/slices/SubjectSlice";
import { Navigate } from "react-router-dom";
import "./RecentArticle.scss";
import { Link } from "react-router-dom";
// import { Direction } from "react-toastify/dist/utils";

function RecentArticle() {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.subjectReducer.allTopics);
    const [currentPage, setCurrentPage] = useState(1);
    const listPerArticle = 5;

    useEffect(() => {
        dispatch(fetchAllTopics());
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Logic to calculate the current page items
    const indexOfLastItem = currentPage * listPerArticle;
    const indexOfFirstItem = indexOfLastItem - listPerArticle;
    const currentArticles = articles.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="article-container">
            <div>
                <Typography.Title level={2} style={{ textAlign: "center" }}>
                    Recent Articles
                </Typography.Title>
                {currentArticles.map((article, id) => {
                    return (
                        <div key={id}>
                            <Card className="map-articles">
                                <div>
                                    <Link to={`contents/${article.subject_id}`}>
                                        <Typography.Title className="article-head">
                                            {article.name}
                                        </Typography.Title>
                                    </Link>

                                    <Typography.Paragraph>
                                        {" "}
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Quas sunt nobis,
                                        eveniet veritatis doloremque ratione
                                        modi temporibus corrupti non aspernatur!{" "}
                                    </Typography.Paragraph>
                                </div>
                            </Card>
                        </div>
                    );
                })}
                <Pagination
                    className="pagination-bar"
                    current={currentPage}
                    total={articles.length}
                    pageSize={listPerArticle}
                    onChange={handlePageChange}
                    responsive="true"
                />
            </div>
        </div>
    );
}

export default RecentArticle;
