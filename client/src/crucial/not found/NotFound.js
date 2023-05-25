import { Result } from "antd";
import React from "react";
import './NotFound.scss'

function NotFound() {
    return (
        <div>
            <Result   
                style={{
                    position: "fixed",
                    left: "50%",
                    top: "30%",
                    transform: "translate(-50% , -50% )",
                    fontSize: "550px" , 
                }}
                status="warning"
                title="Page not Found"
                subTitle="Currently this is not available or we are working on this page"
                className="not-found"
            ></Result>
        </div>
    );
}

export default NotFound;
