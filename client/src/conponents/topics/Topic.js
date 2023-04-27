import React, { useState } from 'react'
import { Button, Card, Form, Input, Typography } from "antd";
const {Title} =  Typography;

function Topic(props) {

    const [topicName , setTopicName] = useState();
    const [val , setVal] = useState(props.state);

    console.log(props);
    
    function OnClick(key){

        setTopicName(key.subjectName);
    }
  return (
      <div className="topic-container">
          <Title>{val}</Title>

          <Card
              title="Add Subject Topics"
              bordered="true"
              headStyle={{ fontSize: "1.5rem" }}
          >
              <Form
                  name="basic"
                  size="large"
                  className="font-size"
                  onFinish={OnClick}
              >
                  <Form.Item
                      label="Enter Subject Name :"
                      name="subjectName"
                      className="font-size"
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
              <p>{topicName}</p>
          </Card>
      </div>
  );
}

export default Topic