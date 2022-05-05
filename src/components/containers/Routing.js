import {Route, Routes} from "react-router-dom";
import Home from "../../pages/presentations/Home";
import Chats from "../../pages/containers/Chats";
import Profile from "../../pages/containers/Profile";
import Gists from "../../pages/containers/Gists";

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/chats/:id' element={<Chats/>}/>
            <Route path='/chats' element={<Chats/>}/>
            <Route path='/gists' element={<Gists/>}/>

        </Routes>
    )
}

export default Routing;