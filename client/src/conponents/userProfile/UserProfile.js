import React, { useEffect, useState } from "react";
import "./UserProfile.scss";
import { Button, Form, Image, Input, Typography} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../../store/slices/userSlice";
import { axiosClient } from "../../utils/axiosClient";
import {toast} from 'react-toastify';
import Spinner from "../../crucial/Spinner";

function UserProfile() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.userReducer.profile);
    const status = useSelector((state) => state.userReducer.profileStatus);
    const [Name, setName] = useState(data?.name);
    const [sem, setSem] = useState(data?.semester);
    const [clgName, setClgName] = useState(data?.clgName);
    const [image, setImage] = useState(data?.avatar?.url);

    useEffect(() => {
        dispatch(userProfile());
        setName(data.name);
    }, [toast , Name]);


    if (status === "loading") {
        return <Spinner></Spinner>
    }
    async function handleSubmit(key) {
       try {
             console.log(key);

             const response = await axiosClient.put("/user/updateUserProfile", {
                 name: key.name,
                 semester: key.semester,
                 clgName: key.clgName,
                 avatar: image,
             });

             toast.success("Profile Update SuccessFully", {
                position:'top-right'
             })
       } catch (e) {
        
       }


    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            if (fileReader.readyState === fileReader.DONE) {
                setImage(fileReader.result);
                console.log("img data", fileReader.result);
            }
        };
    };

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
                    <div className="profile-img">
                        {!image ? (
                            <input
                                className="inputImg"
                                id="inputImg"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        ) : (
                            <>
                                <Image
                                    className="image"
                                    width={200}
                                    src={image}
                                ></Image>

                               <input
                                    className="inputImg"
                                    id="inputImg"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </>
                        )}
                    </div>
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
                            initialValue={Name}
                        >
                            <Input
                                placeholder={
                                    data.name
                                        ? data.name
                                        : "please input your userName"
                                }
                                style={{ width: "70%", color: "black" }}
                                // defaultValue={data.email}
                            ></Input>
                        </Form.Item>

                        <Form.Item
                            label={
                                <Typography.Title level={3}>
                                    Collage Name :
                                </Typography.Title>
                            }
                            name="clgName"
                            initialValue={clgName}
                        >
                            <Input
                                style={{ width: "70%" }}
                                placeholder={
                                    data.clgName
                                        ? data.clgName
                                        : "please input your collage Name"
                                }
                            ></Input>
                        </Form.Item>

                        <Form.Item
                            name="clgYear"
                            label={
                                <Typography.Title level={3}>
                                    Collage year :
                                </Typography.Title>
                            }
                            initialValue={sem}
                        >
                            <Input
                                placeholder={
                                    data.semester
                                        ? data.semester
                                        : "please input your semester"
                                }
                                style={{ width: "70%" }}
                            ></Input>
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

export default UserProfile;
