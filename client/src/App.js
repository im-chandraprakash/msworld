import { Route, Routes } from "react-router-dom";
import Home from "./user/pages/Home/Home";
import AdminDashboard from "./admin/pages/adminDashBoard/Dashboard";
import Subjects from "./admin/components/subjects/Subjects";
import Topic from "./user/components/topics/Topic";
import AddContent from "./admin/components/addContent/AddContent";
import Contents from "./user/pages/content/Contents";
import NotFound from "./shared/templates/not found/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OnlyIfNotLoggedIn from "./shared/encryption/OnlyIfNotLoggedIn";
import UserProfile from "./user/components/userProfile/UserProfile";
import AdminLogin from "./admin/pages/Login/Login.js";
import RequireAdmin from "./shared/encryption/RequireAdmin";
import NavBar from "./user/components/navbar/NavBar";
import Quiz from "./admin/quizes/create quiz/Quiz";
import AddQuiz from "./admin/quizes/addQuiz/AddQuiz";
import TryQuiz from "./user/components/playQuiz/TryQuiz";
import BranchAll from "./admin/components/all branch/BranchAll";
import Semesters from "./admin/components/semesters/Semesters";
import Footer from "./user/components/footer/Footer";
import Statics from "./admin/components/statics/Statics";

function App() {
    return (
        <div className="App">
            <ToastContainer />
            <Routes>
                <Route element={<NavBar />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/userProfile" element={<UserProfile />} />
                    <Route path="contents/:subject_id" element={<Contents />} />

                    <Route path="/tryQuiz" element={<TryQuiz />}></Route>

                    {/* <Route path="/google" element={<Google/>}></Route> */}
                </Route>

                {/* Route for content page */}
                {/* Route for admin page */}
                {/* <Route element={<AdminLogin />}> */}
                <Route element={<RequireAdmin />}>
                    <Route path="/admin" element={<AdminDashboard />}>
                        <Route element={<div>Admin Home</div>}></Route>
                        <Route
                            path=""
                            element={<Statics/>}
                        ></Route>
                        <Route path=":subjects" element={<Subjects />}></Route>
                        <Route
                            path="subjects/:subject_id"
                            element={<Topic />}
                        ></Route>
                        <Route
                            path="subjects/:subject_id/:topic_id"
                            element={<AddContent />}
                        ></Route>
                        <Route path="quiz" element={<Quiz />}></Route>
                        <Route path="quiz/:id" element={<AddQuiz />}></Route>
                        <Route path=":branch" element={<BranchAll />}></Route>
                        <Route
                            path="branch/semester"
                            element={<Semesters />}
                        ></Route>
                    </Route>
                </Route>

                <Route element={<OnlyIfNotLoggedIn />}>
                    <Route path="/adminLogin" element={<AdminLogin />} />
                </Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    );
}

export default App;
