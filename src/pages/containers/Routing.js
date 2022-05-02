import {Route, Routes} from "react-router-dom";
import Home from "../presentations/Home";
import Chats from "./Chats";
import Profile from "./Profile";

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/chats/:id' element={<Chats/>}/>
            <Route path='/chats/' element={<Chats/>}/>

        </Routes>
    )
}

export default Routing;