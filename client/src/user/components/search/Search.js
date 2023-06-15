import React, { useEffect, useState } from "react";
import "./Search.scss";
import Typography from "antd/es/typography/Typography";
import { Button, Card, Form, Input, List, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTopics } from "../../../shared/store/slices/SubjectSlice";

function Search() {
    const [search, setSearch] = useState("");
    // const [temp , setT]
    const dispatch = useDispatch();
    const data = useSelector((state) => state.subjectReducer.allTopics);

    useEffect(() => {
        dispatch(fetchAllTopics());
        // console.log("searching item is : " ,data);
    }, []);

    const searchItem = data.filter((item) => {
        if (search === "") {
            return "";
        } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
        }
    });
    return (
        <div className="search-container">
            <Typography.Title level={3} className="search-head">
                Hello, What Do you Want to Learn?
            </Typography.Title>
            <div className="search-box-div">
                <Form size="large" style={{ display: "flex" }}>
                    <Form.Item>
                        <Input
                            className="search-box-input"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Type something here .... "
                        />
                    </Form.Item>
                </Form>

                <div className="searched-items">
                    {searchItem.map((item, id) => {
                        return (
                            <div key={id}>
                                <Typography.Paragraph>
                                    {item.name}
                                </Typography.Paragraph>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Search;
