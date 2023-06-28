import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { axiosClient } from "../../../shared/utils/axiosClient";
import { Admin_Key_Acess_Token , setItem } from "../../../shared/utils/localStorageManager";
import { BsPersonFillLock } from "react-icons/bs";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axiosClient.post("/admin/login", {
                email,
                password,
            });
            setItem(Admin_Key_Acess_Token, response.result.accessToken);
            navigate("/admin");
            // console.log(response);
        } catch (error) {
            // console.log(error);
        }
    }
    return (
        <div className="login">
            <h1 className="heading">
                Admin Login <BsPersonFillLock className="heading icon" />
            </h1>
            <div className="login-box">
                <h2 className="heading">Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input
                        type="email"
                        className="email"
                        id="email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />

                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        className="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input type="submit" className="submit" />
                </form>
                {/* <p className="subheading">
                    Do not have an account? <Link to="/signup">Sign UP</Link>{" "}
                </p> */}
            </div>
        </div>
    );
}

export default Login;
