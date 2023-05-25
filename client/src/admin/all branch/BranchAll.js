import React, { useEffect, useState } from "react";
import "./BranchAll.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllBranch } from "../../store/slices/branchSlice";
import { Typography, Button, Modal, Form, Input } from "antd";
import { BsCardImage } from "react-icons/bs";
import { axiosClient } from "../../utils/axiosClient";
import { toast } from "react-toastify";

function BranchAll() {
    const [image, setImage] = useState("");
    const [branchName, setBranchName] = useState("");
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const data = useSelector((state) => state.branchReducer.allBranch);

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch(getAllBranch());
        console.log("final data :", data);
    }, [count]);

    // console.log("data : " , data);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {};

    const handleCancel = () => {
        setOpen(false);
    };

    const onFinish = async (value) => {
        console.log("key ", value);
        try {
            const response = await axiosClient.post("/branch/createBranch", {
                branchName: branchName,
                branchImg: image,
            });

            toast.success("Branch Created SuccessFully", {
                position: "top-right",
            });

            console.log(response);

            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setOpen(false);
            }, 3000);
            setCount(count + 1);
        } catch (e) {
            console.log(e);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            if (fileReader.readyState === fileReader.DONE) {
                setImage(fileReader.result);
                console.log("img data", fileReader.result);
            }
        };
    };

    return (
        <div className="branch-container">
            <div className="for-mobile">
                <Button
                    className="create-btn"
                    type="primary"
                    onClick={showModal}
                >
                    Create Branch
                </Button>

                <Modal
                    open={open}
                    title="Title"
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <Button
                            key="submit"
                            type="primary"
                            loading={loading}
                            onClick={onFinish}
                            htmlType="submit"
                        >
                            Create
                        </Button>,
                    ]}
                >
                    <Form name="branch" onFinish={onFinish}>
                        <Form.Item label={<p>Branch Name</p>} name="branchName">
                            <Input
                                style={{ width: "80%" }}
                                onChange={(e) => setBranchName(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item label="Add Image">
                            <input
                                className="inputImg"
                                id="inputImg"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>

            <div className="all-branch-div">
                {data?.map((subData, id) => {
                    return (
                        <div key={id} className="select-branch">
                            <div className="branch-img-div">
                                <img
                                    src={
                                        subData?.image?.url
                                            ? subData.image.url
                                            : "https://crc.losrios.edu/crc/main/img/page-assets/Body-Office-UniversalDetail-940x529/cac/business-and-computer-science-body.png"
                                    }
                                    alt="branch-img"
                                />
                            </div>
                            <div className="branch-name-div">
                                <Typography.Title level={3}>
                                    {subData.branchName}
                                </Typography.Title>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default BranchAll;
