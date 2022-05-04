import {Route, Routes} from "react-router";
import Home from "../../pages/presentations/Home";
import Chats from "../../pages/containers/Chats";
import Profile from "../../pages/containers/Profile";
import Gists from "../../pages/containers/Gists";
import Registration from "../../pages/Registration";
import Login from "../../pages/Login";
import RequireAuth from "../../hocs/RequireAuth";

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route element={<RequireAuth />}>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/chats' element={<Chats />} >
                    <Route path=':id' element={<Chats />} />
                </Route>
                <Route path='/gists' element={<Gists/>}/>
            </Route>
            <Route path='/registration' element={<Registration/>}/>
        </Routes>
    )
}

export default Routing;