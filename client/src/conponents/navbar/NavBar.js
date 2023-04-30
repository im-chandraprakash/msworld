import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { Divider, Layout, Menu, Typography } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

function NavBar() {
    return (
        <div className="container">
            <Layout>
                <Header 
                    style={{
                        backgroundColor: "white",
                        display: "flex",
                        cursor:"pointer",
                        justifyContent:"space-between",
                        alignItems:"center"

                        // alignItems:"stretch"
                    }}
                >
                    <Typography.Title>Msworld</Typography.Title>

                    {/* <div> */}
                        <Menu
                        
                            mode="horizontal"
                            style={{width:"30%"}}
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
                    {/* </div> */}
                </Header>
             <hr />
            </Layout>
        </div>
    );
}

export default NavBar;
