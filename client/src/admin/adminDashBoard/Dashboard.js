import {
    HomeOutlined,
    DashboardOutlined,
    UserAddOutlined,
    ProfileOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    BranchesOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Layout, Menu, Slider, Space, Drawer, Typography } from "antd";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { HiPuzzlePiece } from "react-icons/hi2";
import Item from "antd/es/list/Item";
import "./Dashboard.scss";

function Dashboard() {
    const [current, setCurrent] = useState("mail");
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    function onClose() {
        setOpen(false);
    }

    function showDrawer() {
        setOpen(true);
    }
    function OnClick(e) {
        navigate(e.key);
        console.log(e.key);
    }
    return (
        <div className="admin-dashboard" style={{ display: "flex" }}>
            <div className="side-menu">
                <div className="for-mobile">
                    <div className="header-div">
                        <div className="btn-div">
                            <Button
                                type="primary"
                                onClick={(toggleCollapsed, showDrawer)}
                                className="hamburger-btn"
                            >
                                {collapsed ? (
                                    <MenuUnfoldOutlined />
                                ) : (
                                    <MenuFoldOutlined />
                                )}
                            </Button>

                            <Drawer
                                placement="left"
                                width={250}
                                onClose={onClose}
                                closable="false"
                                open={open}
                                extra={
                                    <Space>
                                        <Button
                                            type="primary"
                                            onClick={onClose}
                                        >
                                            close
                                        </Button>
                                    </Space>
                                }
                            >
                                <Menu
                                    className="mobile-menu"
                                    onClick={OnClick}
                                    defaultSelectedKeys={"subjects"}
                                    defaultOpenKeys={"subjects"}
                                    items={[
                                        {
                                            label: "Home",
                                            className: "menu-labels",
                                            // key:"/",
                                            icon: (
                                                <HomeOutlined
                                                    style={{
                                                        fontSize: "1.3rem",
                                                    }}
                                                />
                                            ),
                                            key: "home",
                                        },
                                        {
                                            label: "Subjects",
                                            icon: <DashboardOutlined />,
                                            key: "subjects",
                                        },
                                        {
                                            label: "Add content",
                                            icon: (
                                                <UserAddOutlined
                                                    style={{
                                                        fontSize: "1.3rem",
                                                    }}
                                                />
                                            ),
                                            key: "addContent",
                                        },
                                        {
                                            label: "Profile",
                                            icon: (
                                                <ProfileOutlined
                                                    style={{
                                                        fontSize: "1.3rem",
                                                    }}
                                                />
                                            ),
                                            key: "profile",
                                        },
                                        {
                                            label: "Quiz",
                                            icon: (
                                                <HiPuzzlePiece
                                                    style={{
                                                        fontSize: "1.3rem",
                                                    }}
                                                />
                                            ),
                                            key: "quiz",
                                        },
                                        {
                                            label: "Branch",
                                            icon: (
                                                <BranchesOutlined
                                                    style={{
                                                        fontSize: "1.3rem",
                                                    }}
                                                />
                                            ),
                                            key: "branch",
                                        },
                                    ]}
                                ></Menu>
                            </Drawer>
                        </div>
                        <Typography.Title level={2}>
                            MsTechWorld
                        </Typography.Title>
                    </div>
                    <div style={{ width: "100%" }}>
                        <Outlet />
                    </div>
                </div>

                <Menu
                    theme="dark"
                    className="admin-menu"
                    style={{ fontSize: "1.5rem", padding: "8px 12px" }}
                    onClick={OnClick}
                    defaultSelectedKeys={"subjects"}
                    defaultOpenKeys={"subjects"}
                    inlineCollapsed={collapsed}
                    items={[
                        {
                            label: "Home",
                            className: "menu-labels",
                            // key:"/",
                            icon: (
                                <HomeOutlined style={{ fontSize: "1.3rem" }} />
                            ),
                            key: "home",
                        },
                        {
                            label: "Subjects",
                            icon: (
                                <DashboardOutlined
                                    style={{ fontSize: "1.3rem" }}
                                />
                            ),
                            key: "subjects",
                        },
                        {
                            label: "Add content",
                            icon: (
                                <UserAddOutlined
                                    style={{ fontSize: "1.3rem" }}
                                />
                            ),
                            key: "addContent",
                        },
                        {
                            label: "Profile",
                            icon: (
                                <ProfileOutlined
                                    style={{ fontSize: "1.3rem" }}
                                />
                            ),
                            key: "profile",
                        },
                        {
                            label: "Quiz",
                            icon: (
                                <HiPuzzlePiece style={{ fontSize: "1.3rem" }} />
                            ),
                            key: "quiz",
                        },
                        {
                            label: "Branch",
                            icon: (
                                <BranchesOutlined
                                    style={{
                                        fontSize: "1.3rem",
                                    }}
                                />
                            ),
                            key: "branch",
                        },
                    ]}
                ></Menu>
            </div>
            <div className="outlet" style={{ width: "100%" }}>
                <Outlet />
            </div>
        </div>
    );
}
export default Dashboard;
