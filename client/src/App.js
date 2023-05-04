import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import RequireUser from "./RequireUser";
import OnlyIfNotLoggedIn from "./conponents/OnlyIfNotLoggedIn";
import List from "./conponents/List";
import Dashboard from "./conponents/dashboard/Dashboard";
import AdminDashboard from "./admin/adminDashBoard/Dashboard";
import Courses from "./conponents/courses/Courses";
import Subjects from "./admin/subjects/Subjects";
import Topic from "./conponents/topics/Topic";
import AddContent from "./admin/addContent/AddContent";
import Content from "antd/es/layout/layout";
import Contents from "./pages/content/Contents";
import ImageTest from "./ImageTest";
import CreatePost from "./conponents/createPost/CreatePost";


function App() {
    // const [inputValue , setInputValue] = useState('');
    return (
        <div className="App">
            <Routes>
                <Route element={<RequireUser />}>
                    <Route element={<Home />}>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/Dsa" element={<List />} />
                    </Route>
                </Route>
                
                {/* Route for content page */}
                <Route element={<Contents />}>
                    <Route path="/contents" element={<Contents />} />
                </Route>
                
                {/* Route for admin page */}
                {/* <Route element={<AdminLogin />}> */}
                    <Route  element={<AdminDashboard />}>
                        <Route
                            path="/dashboard"
                            element={<Courses/>}
                        ></Route>
                        <Route
                            path="/userList"
                            element={<div>UserList</div>}
                        ></Route>
                        <Route
                            path="/profile"
                            element={<div>Profile</div>}
                        ></Route>
                        <Route
                            path="/subjects"
                            element={<Subjects/>}
                        ></Route>
                        <Route
                            path="/topics/:subject_id"
                            element={<Topic/>}
                        ></Route>
                        <Route
                            path="/topics/:subject_id/:topic_id"
                            element={<AddContent/>}
                        ></Route>
                    </Route>
                {/* </Route> */}

                {/* <Route element={<OnlyIfNotLoggedIn />}> */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {/* <Route path="/admin" element={<AdminLogin />} /> */}

                {/* </Route> */}
                {/* <Route path="/image" element = {<ImageTest/>}></Route> */}
                <Route path="/form" element={<CreatePost/>} />
            </Routes>
        </div>
    );
}

export default App;
