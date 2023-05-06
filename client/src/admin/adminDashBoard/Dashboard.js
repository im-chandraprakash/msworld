import { MenuUnfoldOutlined, MenuFoldOutlined, HomeOutlined, DashboardOutlined, UserAddOutlined, ProfileFilled, ProfileOutlined, SignalFilled, PoweroffOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Layout, Menu, Slider } from "antd";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Item from "antd/es/list/Item";

function Dashboard() {
    const [current, setCurrent] = useState("mail");
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    function OnClick(e) {
       navigate(e.key);
    console.log(e.key);
    }
    return (
        <div className="admin-dashboard" style={{display:"flex"}}>
            <Menu
                theme="light"
                style={{ fontSize: "1.5rem", padding: "8px 12px" }}
                onClick={OnClick}
                defaultSelectedKeys={"profile"}
                defaultOpenKeys={"profile"}
                items={[
                    {
                        label: "Home",
                        // key:"/",
                        icon: <HomeOutlined style={{ fontSize: "1.3rem" }} />,
                        key:'home'
                        
                    },
                    {
                        label: "Subjects",
                        icon: (
                            <DashboardOutlined style={{ fontSize: "1.3rem" }} />
                        ),
                        key:"subjects",
                    },
                    {
                        label: "Add content",
                        icon: <UserAddOutlined style={{ fontSize: "1.3rem" }} />,
                        key:"addContent",
                    },
                    {
                        label:"Profile",
                        icon: <ProfileOutlined style={{ fontSize: "1.3rem" }} />,
                        key:"profile",
                    },
                    {
                        label: "Signout",
                        icon: (
                            <PoweroffOutlined style={{ fontSize: "1.3rem" }} />
                        ),
                        key:"signOut"
                    },

                ]}
                ></Menu>
                <Outlet/>
        </div>
    );
}
export default Dashboard;
