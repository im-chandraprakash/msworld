import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import RequireUser from "./RequireUser";
import OnlyIfNotLoggedIn from "./conponents/OnlyIfNotLoggedIn";
import NavBar from "./conponents/navbar/NavBar";
import List from "./conponents/List";
import Dashboard from "./conponents/dashboard/Dashboard";
import AdminLogin from "./admin/Login";
import AdminDashboard from "./admin/adminDashBoard/Dashboard";
import Courses from "./conponents/courses/Courses";
import Subjects from "./admin/adminDashBoard/Subjects";

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
                    </Route>
                {/* </Route> */}

                {/* <Route element={<OnlyIfNotLoggedIn />}> */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {/* <Route path="/admin" element={<AdminLogin />} /> */}

                {/* </Route> */}
            </Routes>
        </div>
    );
}

export default App;
