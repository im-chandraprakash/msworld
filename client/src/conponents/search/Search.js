import React, { useEffect, useState } from 'react'
import './Search.css'
import Typography from 'antd/es/typography/Typography';
import { Button, Card, Form, Input, List, Tooltip } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTopics } from '../../store/slices/SubjectSlice';

function Search() {

    const [search , setSearch] = useState("");
    // const [temp , setT]
    const dispatch = useDispatch();
    const data = useSelector((state) => state.subjectReducer.allTopics);

    useEffect(()=>{
        dispatch(fetchAllTopics());
        console.log("searching item is : " ,data);
    } , []);

    const searchItem = data.filter((item) =>{
        if(search === ""){
            return "";
        }
        else if(item.name.toLowerCase().includes(search.toLowerCase())){
            return item
        }
    })
  return (
      <div className="search-container" >
          <Typography.Title>Hello, What Do you Want to Learn?</Typography.Title>
          <div className="search-box" >
              <div className="search">
                  <Form size="large" style={{display:"flex"}}>
                      <Form.Item>
                          <Input onChange={(e)=> setSearch(e.target.value)} placeholder="Type something here .... " />
                      </Form.Item>
                      <Form.Item>
                        
                          <Tooltip title="search">
                              <Button
                                //   type="primary"
                                //   shape="circle"
                                  icon={<SearchOutlined />}
                              >Search</Button>
                          </Tooltip>
                      </Form.Item>
                  </Form>

                  <div className='searched-items'> 
                        {
                            searchItem.map((item , id) =>{
                                return (
                                    <div key={id}>
                                        <Typography.Paragraph>
                                            {item.name}
                                        </Typography.Paragraph>
                                    </div>
                                );
                            })
                        }
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Search