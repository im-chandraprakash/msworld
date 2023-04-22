import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import RequireUser from "./RequireUser";
import OnlyIfNotLoggedIn from "./conponents/OnlyIfNotLoggedIn";
import NavBar from "./conponents/NavBar";
import Search from "./conponents/Search";

function App() {
    // const [inputValue , setInputValue] = useState('');
    return (
        <div className="App">
            <Routes>
                <Route element={<RequireUser />}>
                    <Route path="/" element={<Home />} />
                </Route>

                {/* <Route element={<OnlyIfNotLoggedIn />}> */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {/* </Route> */}
            </Routes>
        </div>
    );
}

export default App;
