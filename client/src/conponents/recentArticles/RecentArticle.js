import { Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTopics } from "../../store/slices/SubjectSlice";

function RecentArticle() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.subjectReducer.allTopics);
    // const data1 = data.slice(0 , 10);
    // data.splice(1);

    useEffect(() => {
        dispatch(fetchAllTopics());

    }, []);
    return (
        <div className="article-container" style={{textAlign:'center'}}>
            <Typography.Title>Recent Articles</Typography.Title>

            {data.map((article, id) => {
                return (
                    <div key={id}>
                        <Typography.Paragraph>
                            {article.name}
                        </Typography.Paragraph>
                    </div>
                );
            })}
        </div>
    );
}

export default RecentArticle;
