import React, { useEffect, useState } from "react";
import "./Search.scss";
import Typography from "antd/es/typography/Typography";
import { Button, Card, Form, Input, List, Tooltip, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTopics } from "../../../shared/store/slices/SubjectSlice";
import { Link } from "react-router-dom";

function Search() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const data = useSelector((state) => state.subjectReducer.allTopics);
    const listPerSearch = 5;

    console.log("search", data);
    // const [currentSearchedItems , setCurrentSearchedItems] = useState('');

    useEffect(() => {
        dispatch(fetchAllTopics());
    }, []);

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const searchItem = data.filter((item) => {
        if (search === "") {
            return "";
        } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
        }
    });

    const currentSearchedItems = searchItem.slice(0, listPerSearch);

    return (
        <div className="search-container">
            <Typography.Title level={3} className="search-head">
                What Do you Want to Learn?
            </Typography.Title>
            <div className="search-box-div">
                <Form>
                    <Form.Item>
                        <Input
                            className="search-box-input"
                            onChange={(e) => onChange(e)}
                            placeholder="start searching here .... "
                        />
                    </Form.Item>
                </Form>
                <div className="search-item-div">
                    {currentSearchedItems.map((item, id) => {
                        return (
                            <div key={id}>
                                <Typography.Title
                                    level={4}
                                    className="search-items"
                                >
                                    
                                    <Link to={`/contents/${item.subject_id}`} state={{topic_id : `${item.id}`}}> {item.name}</Link>
                                </Typography.Title>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Search;
