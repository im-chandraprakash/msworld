import React from "react";
import { Button, Card, Col, Row, Statistic } from "antd";
import "./Statics.scss";
import { BiUser, BiGitBranch } from "react-icons/bi";
import {ImBooks} from 'react-icons/im'

function Statics() {
    return (
        <div className="container">
            <div className="static-container">
                <Row gutter={16} className="static-row">
                    <Col  className="static-column">
                        <Card className="total-user">
                            <BiUser className="icon" />
                            <Statistic title={"Total Users"} value={5} />
                        </Card>
                    </Col>
                    <Col  className="static-column">
                        <Card>
                            <ImBooks className="icon" />
                            <Statistic title="Total Subjects" value={20} />
                        </Card>
                    </Col>
                    <Col  className="static-column">
                        <Card>
                            <BiGitBranch className="icon" />
                            <Statistic title="Total Branch " value={20} />
                        </Card>
                    </Col>
                </Row>
                <Row className="static-row">
                    <Col className="static-column">
                        <Card>
                            <BiGitBranch className="icon" />
                            <Statistic title="Total Contents" value={30} />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Statics;
