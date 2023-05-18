import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
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
import Google from "./conponents/Google";
import Quiz from "./admin/quizes/Quiz";
import AddQuiz from "./admin/quizes/addQuiz/AddQuiz";

function App() {
    return (
        <div className="App">
            <ToastContainer />
            <Routes>
                <Route element={<NavBar />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/userProfile" element={<UserProfile />} />
                    <Route
                        path="contents/:subject_id"
                        element={<Contents />}
                    />
                    {/* <Route path="/google" element={<Google/>}></Route> */}
                </Route>

                {/* Route for content page */}
                {/* Route for admin page */}
                {/* <Route element={<AdminLogin />}> */}
                <Route element={<RequireAdmin />}>
                    <Route path="/admin" element={<AdminDashboard />}>
                        <Route element={<div>Admin Home</div>}></Route>
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
                        <Route path="quiz" element={<Quiz/>}></Route>
                        <Route path="quiz/:id" element={<AddQuiz/>}></Route>
                    </Route>
                </Route>
                {/* </Route> */}

                <Route element={<OnlyIfNotLoggedIn />}>
                    <Route path="/adminLogin" element={<AdminLogin />} />
                </Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    );
}

export default App;
