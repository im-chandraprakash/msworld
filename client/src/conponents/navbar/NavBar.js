import { React, useState } from "react";
import "./Navbar.css";
import { Button, Layout, Menu, Typography, Modal, Avatar } from "antd";
import { Header } from "antd/es/layout/layout";
// import Signup from "../../pages/signup/Signup";
// import Login from "../../pages/login/Login.scss";
// import Profile from "../profile/Profile";
import { UserOutlined } from "@ant-design/icons";
import {
    Admin_Key_Acess_Token,
    KEY_ACCESS_TOKEN,
    getItem,
} from "../../utils/localStorageManager";
import { axiosClient } from "../../utils/axiosClient";
import { setItem } from "../../utils/localStorageManager";
import { Link } from "react-router-dom";

function NavBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [model, setModel] = useState(false);
    const user = getItem(KEY_ACCESS_TOKEN);
    const admin = getItem(Admin_Key_Acess_Token);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {}

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const showModelSignIn = () => {
        setModel(true);
    };

    const handleSignInOk = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post("/auth/login", {
                email,
                password,
            });
            setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
        } catch (error) {
            console.log(error);
        }
        setModel(false);
    };

    const handleSignInCancel = () => {
        setModel(false);
    };
    return (
        <div className="container">
            <Layout>
                <Header
                    style={{
                        backgroundColor: "white",
                        display: "flex",
                        cursor: "pointer",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}
                >
                    <Typography.Title>Msworld</Typography.Title>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "100px",
                        }}
                    >
                        <Menu
                            mode="horizontal"
                            disabledOverflow="true"
                            items={[
                                {
                                    label: "Courses",
                                    key: "courses",
                                },
                                {
                                    label: "Jobs",
                                    key: "jobs",
                                },
                                {
                                    label: "Tutorials",
                                    key: "tutorials",
                                },
                                {
                                    label: "Practice",
                                    key: "practice",
                                },
                            ]}
                        ></Menu>

                        {!admin ? (
                            <div>
                                {!user && !admin ? (
                                    <div>
                                        <Button
                                            type="primary"
                                            style={{
                                                padding: "10px 15px",
                                                width: "120px",
                                                height: "45px",
                                            }}
                                            onClick={showModal}
                                        >
                                            SignIn
                                        </Button>
                                        <Modal
                                            title="Sign In Modal"
                                            open={isModalOpen}
                                            onOk={handleOk}
                                            onCancel={handleCancel}
                                            afterClose={handleSubmit}
                                        ></Modal>

                                        <Button
                                            type="primary"
                                            style={{
                                                padding: "10px 15px",
                                                width: "120px",
                                                height: "45px",
                                            }}
                                            onClick={showModelSignIn}
                                        >
                                            LogIn
                                        </Button>
                                        <Modal
                                            title="Login Modal"
                                            open={model}
                                            onOk={handleSignInOk}
                                            onCancel={handleSignInCancel}
                                            afterClose={handleSubmit}
                                        >
                                            <form onSubmit={handleSignInOk}>
                                                <label htmlFor="email">
                                                    email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="email"
                                                    id="email"
                                                    onChange={(e) => {
                                                        setEmail(
                                                            e.target.value
                                                        );
                                                    }}
                                                />

                                                <label htmlFor="password">
                                                    password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="password"
                                                    id="password"
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </form>
                                        </Modal>
                                    </div>
                                ) : (
                                    <Link to={"/userProfile"}>
                                        <Avatar
                                            size={50}
                                            style={{
                                                backgroundColor: "#87d068",
                                            }}
                                            icon={<UserOutlined />}
                                        ></Avatar>
                                    </Link>
                                )}
                            </div>
                        ) : (
                           <h2>Welcom Admin</h2>
                        )}
                    </div>
                </Header>
                <hr />
            </Layout>
        </div>
    );
}

export default NavBar;
