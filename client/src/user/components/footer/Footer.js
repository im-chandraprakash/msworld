import { Divider, Table, Typography } from "antd";
import React from "react";
import "./Footer.scss";

function Footer() {
    return (
        <div className="footer-container" style={{ textAlign: "center" }}>
            <div className="msworld-tag">
                <Typography.Title level={2}>MSworld</Typography.Title>
            </div>

            <div className="footer-msworld">
                
                <ul>
                    <li className="table-head">Company</li>
                    <li>About us</li>
                    <li>C programming</li>
                    <li>C programming</li>
                </ul>
                <ul>
                    <li className="table-head">Computer Science</li>
                    <li>Contact us</li>
                    <li>SEPM</li>
                    <li>Operating System</li>
                </ul>
                <ul>
                    <li className="table-head">Gate</li>
                    <li>Terms & Conditions</li>
                    <li>MIS</li>
                    <li>Computer Network</li>
                </ul>
                <ul>
                    <li className="table-head">Subscribe</li>
                    <li>Privacy Policy</li>
                    <li>Artificial Intelligence</li>
                    <li>Discrit Mathematics</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
