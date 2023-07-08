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
import {
    Outlet,
    Route,
    Routes,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { HiPuzzlePiece } from "react-icons/hi2";
import "./Dashboard.scss";
import { useDispatch, useSelector } from "react-redux";
import { setLastRoute } from "../../../shared/store/slices/StatusSlice";

function Dashboard() {

    // const dispatch = useDispatch();
    const location = useLocation();
    const params = useParams();
    const [current, setCurrent] = useState("mail");
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [selectedKey , setSelectedKey] = useState("/admin");
    // const lastRoute = useSelector((state) => state.statusReducer.lastRoute);
    const lastRoute = location.pathname.substring(
        location.pathname.lastIndexOf("/") + 1
    );
    const paramsCheck = useState(
        params?.subjects ? `/admin/${params.subjects}` : "/admin"
    );

    console.log("params value is :", params);
    // console.log("last route :", lastRoute);

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
        setSelectedKey(e.key);
        navigate(e.key);
        // dispatch(setLastRoute(e.key))
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
                                            key: "/admin",
                                        },
                                        {
                                            label: "Subjects",
                                            icon: <DashboardOutlined />,
                                            key: "/admin/subjects",
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
                    onClick={OnClick}
                    // defaultSelectedKeys={paramsCheck}
                    selectedKeys={selectedKey}
                    // defaultOpenKeys={true}
                    inlineCollapsed={collapsed}
                    items={[
                        {
                            label: "Home",
                            className: "menu-labels",

                            icon: (
                                <HomeOutlined style={{ fontSize: "1.3rem" }} />
                            ),
                            key: "/admin",
                        },
                        {
                            label: "Subjects",
                            icon: (
                                <DashboardOutlined
                                    style={{ fontSize: "1.3rem" }}
                                />
                            ),
                            key: "/admin/subjects",
                        },
                        {
                            label: "Quiz",
                            icon: (
                                <HiPuzzlePiece style={{ fontSize: "1.3rem" }} />
                            ),
                            key: "/admin/quiz",
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
                            key: "/admin/branch",
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
