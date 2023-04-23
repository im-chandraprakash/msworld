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


function App() {
    // const [inputValue , setInputValue] = useState('');
    return (
        <div className="App">
            <Routes>
                <Route element={<RequireUser />}>
                    <Route element={<Home />}>
                        <Route path="/" element={<Dashboard/>} />
                        <Route path="/Dsa" element={<List/>} />
                    </Route>
                </Route>

                {/* <Route path="/aDashboard" element={<ADashboard/>}/> */}

                {/* <Route element={<OnlyIfNotLoggedIn />}> */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {/* <Route path="/admin" element={<ALogin/>} /> */}

                {/* </Route> */}
            </Routes>
        </div>
    );
}

export default App;
