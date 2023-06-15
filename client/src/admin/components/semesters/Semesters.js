import React from "react";
import "./Semesters.scss";
import { Typography } from "antd";
import { Link } from "react-router-dom";

function Semesters() {
    return (
        <div className="sem-container">
            <div className="sem-card">
                <Link className="sem-link">
                    <Typography.Title>Semster 1</Typography.Title>
                </Link>
            </div>
            <div className="sem-card">
                <Link className="sem-link">
                    <Typography.Title>Semster 2</Typography.Title>
                </Link>
            </div>
            <div className="sem-card">
                <Link className="sem-link">
                    <Typography.Title>Semster 3</Typography.Title>
                </Link>
            </div>
            <div className="sem-card">
                <Link className="sem-link">
                    <Typography.Title>Semster 4</Typography.Title>
                </Link>
            </div>
            <div className="sem-card">
                <Link className="sem-link">
                    <Typography.Title>Semster 5</Typography.Title>
                </Link>
            </div>
            <div className="sem-card">
                <Link className="sem-link">
                    <Typography.Title>Semster 6</Typography.Title>
                </Link>
            </div>
            <div className="sem-card">
                <Link className="sem-link">
                    <Typography.Title>Semster 7</Typography.Title>
                </Link>
            </div>
            <div className="sem-card">
                <Link className="sem-link">
                    <Typography.Title>Semster 8</Typography.Title>
                </Link>
            </div>
        </div>
    );
}

export default Semesters;
