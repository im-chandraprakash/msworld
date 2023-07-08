import React from "react";
import { Admin_Key_Acess_Token, getItem } from "../utils/localStorageManager";
import { Navigate, Outlet } from "react-router-dom";
import { KEY_ACCESS_TOKEN } from "../utils/localStorageManager";

function RequireAdmin() {
    const admin = getItem(Admin_Key_Acess_Token);
    const user = getItem(KEY_ACCESS_TOKEN);

    // if(user){
    //     <Navigate to="/"/>
    // }
    return <div>{admin ? <Outlet /> : <Navigate to={"/adminLogin"} />}</div>;
}

export default RequireAdmin;
