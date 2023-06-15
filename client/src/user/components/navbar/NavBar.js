import { React, useEffect, useState } from "react";
import "./Navbar.scss";
import { Button, Layout, Menu, Typography, Modal, Avatar, Divider } from "antd";
import { Header } from "antd/es/layout/layout";
import { UserOutlined } from "@ant-design/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { toast } from "react-toastify";
import {
    Admin_Key_Acess_Token,
    KEY_ACCESS_TOKEN,
    getItem,
} from "../../../shared/utils/localStorageManager";
import { axiosClient } from "../../../shared/utils/axiosClient";
import { setItem } from "../../../shared/utils/localStorageManager";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../../../shared/store/slices/userSlice";

function NavBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [model, setModel] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    const user = getItem(KEY_ACCESS_TOKEN);
    const admin = getItem(Admin_Key_Acess_Token);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [clgName, setClgName] = useState("");
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    const data = useSelector((state) => state.userReducer.profile?.avatar?.url);

    console.log("user profile photo : ", data);

    useEffect(() => {
        if (user) {
            dispatch(userProfile());
        }
    }, []);

    function handleLogInToSignUp() {
        handleSignInCancel();
        showModal();
    }

    function handleSignUpToLogIn(val) {
        handleCancel();
        showModelSignIn();
    }

    const showHamburger = () => {
        setHamburger(true);
    };

    const handleCancelHamburger = () => {
        setHamburger(false);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosClient.post("/auth/signup", {
                name: userName,
                clgName,
                email,
                password,
            });

            toast.success("Signed Up SuccessFully", {
                position: "top-right",
            });
            console.log("sign up ", response);
        } catch (e) {
            console.log(e);
        } finally {
            setUserName("");
            setClgName("");
            setEmail("");
            setPassword("");
        }

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

    function onClickHamberger() {}
    return (
        <div className="navbar-container">
            <Layout>
                <Header className="navbar-header">
                    <Typography.Title>Msworld</Typography.Title>

                    <div className="hamburger-menu">
                        <GiHamburgerMenu onClick={showHamburger} />

                        <Modal
                            title="hamburger"
                            open={hamburger}
                            className="hamburger-model"
                            // onOk={handleSignInOk}
                            onCancel={handleCancelHamburger}
                            // afterClose={handleSubmit}
                        >
                            <ul>
                                <li className="hamburger-links">About</li>
                                <li className="hamburger-links">Course</li>
                                <li className="hamburger-links">Practice</li>
                                <li className="hamburger-links">Quiz</li>
                            </ul>
                        </Modal>
                    </div>
                    <div className="navbar-right-part">
                        <div className="quiz-div">
                            <Link className="quiz-link" to="/tryQuiz">
                                Quiz
                            </Link>
                        </div>
                        <Menu
                            className="menu-navbar-header"
                            mode="horizontal"
                            disabledOverflow="true"
                            items={[
                                {
                                    //    label:{}
                                },
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
                            <div className="login-signup-div">
                                {!user && !admin ? (
                                    <div>
                                        <Button
                                            type="primary"
                                            className="signup-btn"
                                            onClick={showModal}
                                        >
                                            SignUp
                                        </Button>
                                        <Modal
                                            title="Sign Up Modal"
                                            open={isModalOpen}
                                            onOk={handleOk}
                                            onCancel={handleCancel}
                                            // afterClose={handleSubmit}
                                            footer={[
                                                <Button
                                                    key="signUp"
                                                    type="primary"
                                                    onClick={handleOk}
                                                >
                                                    Sign Up
                                                </Button>,
                                            ]}
                                        >
                                            <form onSubmit={handleOk}>
                                                {/* // Sign Up Name --------------------------------------------------------- */}
                                                <label>
                                                    {
                                                        <Typography.Title
                                                            level={4}
                                                        >
                                                            Name :
                                                        </Typography.Title>
                                                    }{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    className="input"
                                                    onChange={(e) => {
                                                        setUserName(
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                                <Divider></Divider>

                                                {/* // Sign Up Email ------------------------------------------------------ */}

                                                <label>
                                                    {
                                                        <Typography.Title
                                                            level={4}
                                                        >
                                                            Email :
                                                        </Typography.Title>
                                                    }{" "}
                                                </label>
                                                <input
                                                    type="email"
                                                    className="input"
                                                    id="email"
                                                    onChange={(e) => {
                                                        setEmail(
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                                <Divider></Divider>
                                                <label>
                                                    {
                                                        <Typography.Title
                                                            level={4}
                                                        >
                                                            Password :
                                                        </Typography.Title>
                                                    }{" "}
                                                </label>
                                                <input
                                                    type="password"
                                                    className="input"
                                                    id="password"
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <Divider></Divider>
                                                <label>
                                                    {
                                                        <Typography.Title
                                                            level={4}
                                                        >
                                                            Collage Name :
                                                        </Typography.Title>
                                                    }
                                                </label>
                                                <input
                                                    type="text"
                                                    className="input"
                                                    id="text-input"
                                                    onChange={(e) =>
                                                        setClgName(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </form>

                                            <Typography.Title level={5}>
                                                {" "}
                                                Already have a Account
                                                <Button
                                                    onClick={
                                                        handleSignUpToLogIn
                                                    }
                                                >
                                                    Log in
                                                </Button>
                                            </Typography.Title>
                                        </Modal>

                                        <Button
                                            type="primary"
                                            className="signin-btn"
                                            onClick={showModelSignIn}
                                        >
                                            LogIn
                                        </Button>
                                        <Modal
                                            title="Login Modal"
                                            open={model}
                                            onOk={handleSignInOk}
                                            onCancel={handleSignInCancel}
                                            // afterClose={handleSubmit}
                                            footer={[
                                                <Button
                                                    key="logIn"
                                                    type="primary"
                                                    onClick={handleSignInOk}
                                                >
                                                    Log In
                                                </Button>,
                                            ]}
                                        >
                                            <form onSubmit={handleSignInOk}>
                                                <label htmlFor="email">
                                                    {
                                                        <Typography.Title
                                                            level={4}
                                                        >
                                                            {" "}
                                                            Email
                                                        </Typography.Title>
                                                    }
                                                </label>
                                                <input
                                                    type="email"
                                                    className="input"
                                                    id="email"
                                                    onChange={(e) => {
                                                        setEmail(
                                                            e.target.value
                                                        );
                                                    }}
                                                />

                                                <br />

                                                <label htmlFor="password">
                                                    {
                                                        <Typography.Title
                                                            level={4}
                                                        >
                                                            {" "}
                                                            Password :
                                                        </Typography.Title>
                                                    }
                                                </label>
                                                <input
                                                    type="password"
                                                    className="input"
                                                    id="password"
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </form>

                                            <Typography.Title level={5}>
                                                {" "}
                                                Don't have an Account
                                                <Button
                                                    onClick={() =>
                                                        handleLogInToSignUp()
                                                    }
                                                >
                                                    SignUp
                                                </Button>
                                            </Typography.Title>
                                        </Modal>
                                    </div>
                                ) : (
                                    <Link to={"/userProfile"}>
                                        <Avatar
                                            size={50}
                                            style={{
                                                backgroundColor: "#87d068",
                                            }}
                                            icon={
                                                !data ? (
                                                    <UserOutlined />
                                                ) : (
                                                    <img
                                                        width="100%"
                                                        src={data}
                                                    ></img>
                                                )
                                            }
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

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default NavBar;
