import { Result } from "antd";
import React from "react";

function NotFound() {
    return (
        <div>
            <Result
                 
                style={{
                    position: "fixed",
                    left: "50%",
                    top: "30%",
                    transform: "translate(-50% , -50% )",
                    fontSize: "250px " ,
                    
                }}
                status="error"
                title="Submission Failed"
                subTitle="Please check and modify the following information before resubmitting."
                className="not-found"
            ></Result>
        </div>
    );
}

export default NotFound;
