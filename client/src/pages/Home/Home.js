import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../store/slices/UserSlice";
import { axiosClient } from "../../utils/axiosClient";
import NavBar from "../../conponents/NavBar";
import Search from "../../conponents/Search";
import Courses from "../../conponents/Courses";

function Home() {
    // const [notes, setNotes] = useState();
    // const dispatch = useDispatch();
    // const data = useSelector((state) => state.users);

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     dispatch(addNote(notes));
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // async function fetchData() {
    //     try {
    //         console.log("chandu");
    //         const response = await axiosClient.get("/post/getAllPost");
    //         console.log("chandu");

    //         console.log("got the response", response);
    //         console.log("chandu");
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    return (
        // <div>
        //     <h1>Notes App</h1>
        //     <form action="#" onSubmit={handleSubmit}>
        //         <label htmlFor="search">
        //             <input
        //                 id="search"
        //                 type="text"
        //                 onChange={(event) => setNotes(event.target.value)}
        //                 required
        //             />
        //         </label>
        //         <input type="submit" onClick={handleSubmit} />
        //     </form>
        //     {data.map((person, id) => {
        //         return <li key={id}>{person}</li>;
        //     })}
        // </div>
        <div className="home-container">
            <NavBar/>
            <Search/>
            <Courses/>
        </div>
    );
}

export default Home;
