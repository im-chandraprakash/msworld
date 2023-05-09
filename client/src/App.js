import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import List from "./conponents/List";
import AdminDashboard from "./admin/adminDashBoard/Dashboard";
import Subjects from "./admin/subjects/Subjects";
import Topic from "./conponents/topics/Topic";
import AddContent from "./admin/addContent/AddContent";
import Contents from "./pages/content/Contents";
import NotFound from "./crucial/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OnlyIfNotLoggedIn from "./encryption/OnlyIfNotLoggedIn";
import UserProfile from "./conponents/userProfile/UserProfile";
import AdminLogin from "./admin/Login/Login";
import RequireAdmin from "./encryption/RequireAdmin";
import NavBar from "./conponents/navbar/NavBar";

function App() {
    return (
        <div className="App">
            <ToastContainer />
            <Routes>
                <Route element={<NavBar/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/Dsa" element={<List />} />
                    <Route path="/userProfile" element={<UserProfile />} />
                </Route>

                {/* Route for content page */}
                <Route element={<Contents />}>
                    <Route path="/contents" element={<Contents />} />
                </Route>

                {/* Route for admin page */}
                {/* <Route element={<AdminLogin />}> */}
                <Route element={<RequireAdmin />}>
                    <Route path="/admin" element={<AdminDashboard />}>

                        <Route  element={<div>Admin Home</div>}></Route>
                        <Route
                            path="userList"
                            element={<div>UserList</div>}
                        ></Route>
                        <Route
                            path="profile"
                            element={<div>Profile</div>}
                        ></Route>
                        <Route path="subjects" element={<Subjects />}></Route>
                        <Route
                            path="subjects/:subject_id"
                            element={<Topic />}
                        ></Route>
                        <Route
                            path="subjects/:subject_id/:topic_id"
                            element={<AddContent />}
                        ></Route>
                    </Route>
                </Route>
                {/* </Route> */}

                <Route element={<OnlyIfNotLoggedIn />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/adminLogin" element={<AdminLogin />} />
                </Route>
                {/* <Route path="/image" element = {<ImageTest/>}></Route> */}
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    );
}

export default App;
