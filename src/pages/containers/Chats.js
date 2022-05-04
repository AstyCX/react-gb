import Message from "../../components/presentations/Message";
import ChatList from "../../components/containers/ChatList";
import {useCallback, useEffect, useRef, useState} from "react";
import ControlPanel from "../../components/presentations/ControlPanel";
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addMessageFBSaga, changeChatListSaga} from "../../store/Duck/actions";
import {getChatList, getMessageList, getProfileName, getState} from "../../store/Duck/selectors";
import {getMessagesFB} from "../../middlewares/firebaseActions";

const Chats = () => {
    const state = useSelector(getState);
    const name = useSelector(getProfileName)
    const dispatch = useDispatch();
    const messageList = useSelector(getMessageList)
    const [value, setValue] = useState('');
    const inputEl = useRef(null);
    const {id} = useParams();

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        // dispatch(addMessageWithSaga(location.id, {text: value, author: name}))
        dispatch(addMessageFBSaga(id, {text: value, author: name}))
        setValue('');
        inputEl.current.focus();
    }

    useEffect(()=>{
        dispatch(changeChatListSaga());
    }, [id, messageList[id]])

    return (<>
            <ChatList/>
            <div className="carryMessages">
                <div className='messages'>
                    {id && messageList[id] ? messageList[id].map((el, i) => (
                        <Message key={i} props={el}/>
                    )) : <h1>Select or create a chat</h1>}
                </div>
                {id && messageList[id] &&
                    <ControlPanel inputEl={inputEl} handleChange={handleChange} handleClick={handleClick}
                                  value={value}/>}
                {id}
            </div>
        </>
    );
}


export default Chats;