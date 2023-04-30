import React from 'react'
import './Search.css'
import Typography from 'antd/es/typography/Typography';
import { Button, Form, Input, Tooltip } from 'antd';
import { SearchOutlined } from "@ant-design/icons";

function Search() {
  return (
      <div className="search-container" >
          <Typography.Title>Hello, What Do you Want to Learn?</Typography.Title>
          <div className="search-box" >
              <div className="search">
                  <Form size="large" style={{display:"flex"}}>
                      <Form.Item>
                          <Input placeholder="Type something here .... " />
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
              </div>
          </div>
      </div>
  );
}

export default Search