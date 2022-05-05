import {Route, Routes} from "react-router";
import Home from "../../pages/presentations/Home";
import Chats from "../../pages/containers/Chats";
import Profile from "../../pages/containers/Profile";
import Gists from "../../pages/containers/Gists";
import Registration from "../../pages/containers/Registration";
import Login from "../../pages/containers/Login";
import RequireAuth from "../../hocs/RequireAuth";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {changeChatListSaga} from "../../store/Duck/actions";
import {useDispatch} from "react-redux";

const Routing = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(changeChatListSaga())
    }, [location.pathname, dispatch])

    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route element={<RequireAuth />}>
                <Route path='/' element={<Home/>}/>
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