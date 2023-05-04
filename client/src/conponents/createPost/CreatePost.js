import React, { useState } from "react";
// import "./CreatePost.scss";
import { BsCardImage } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { axiosClient } from "../../utils/axiosClient";


function CreatePost() {
    const [postImg, setPostImg] = useState("");
    const [caption, setCaption] = useState("");
    const dispatch = useDispatch();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            if (fileReader.readyState === fileReader.DONE) {
                setPostImg(fileReader.result);
                console.log("img data", fileReader.result);
            }
        };
    };

    const hanldePostSubmit = async () => {
        try {
            const result = await axiosClient.post("/sub/image", {
                image:postImg,
            });
            console.log("post done", result);
        } catch (error) {
            console.log("what is th error", error);
        } finally {
            setCaption("");
            setPostImg("");
        }
    };

    return (
        <div className="CreatePost">
            <div className="bottom-part">
                <div className="input-post-img">
                    <label htmlFor="inputImg" className="labelImg">
                       this is input field
                    </label>
                    <input
                        className="inputImg"
                        id="inputImg"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <button
                    className="post-btn btn-primary"
                    onClick={hanldePostSubmit}
                >
                    Post
                </button>
            </div>
        </div>
    );
}

export default CreatePost;
