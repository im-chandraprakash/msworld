import React from 'react'
import './UserProfile.scss'
import { Button, Form, Input, Typography, Upload } from 'antd'

function UserProfile() {

  function handleSubmit(key){

    console.log(key);
  }
  function handleChange(){


  }
  return (
      <div className="userProfile-container">
          <div className="userProfile-subContainer">
              <div
                  className="user-image"
                  style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                  }}
              >
                  {/* <Upload
                      name="avatar"
                      listType="picture-circle"
                      className="user-avatar"
                      onChange={handleChange}
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  >
                      uploadButton
                  </Upload> */}
                  <Typography.Title className="left-part">
                      <Typography.Title>
                          Image
                      </Typography.Title>
                  </Typography.Title>
              </div>
              <div className="user-details">
                  <Form name="userDetails" onFinish={handleSubmit}>
                      <Form.Item
                          label={
                              <Typography.Title level={3}>
                                  Name :
                              </Typography.Title>
                          }
                          name="name"
                          rules={[
                              {
                                  required: true,
                                  message: "please input your userName",
                              },
                          ]}
                      >
                          <Input style={{ width: "70%" }}></Input>
                      </Form.Item>

                      <Form.Item
                          label={
                              <Typography.Title level={3}>
                                  Collage Name :
                              </Typography.Title>
                          }
                          name="clgName"
                          rules={[
                              {
                                  required: true,
                                  message: "please input your collage Name",
                              },
                          ]}
                      >
                          <Input style={{ width: "70%" }}></Input>
                      </Form.Item>

                      <Form.Item
                          name="clgYear"
                          label={
                              <Typography.Title level={3}>
                                  Collage year :
                              </Typography.Title>
                          }
                      >
                          <Input style={{ width: "70%" }}></Input>
                      </Form.Item>

                      <Form.Item>
                          <Button type="primary" htmlType="sumit">
                              Submit
                          </Button>
                      </Form.Item>
                  </Form>
              </div>
          </div>
      </div>
  );
}

export default UserProfile