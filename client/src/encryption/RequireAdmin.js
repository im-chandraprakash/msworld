import React from "react";
import { Admin_Key_Acess_Token, getItem } from "../utils/localStorageManager";
import { Navigate, Outlet } from "react-router-dom";

function RequireAdmin() {
    const admin = getItem(Admin_Key_Acess_Token);
    return <>{
        admin ? <Outlet/> : Navigate("/")
    }</>;
}

export default RequireAdmin;
