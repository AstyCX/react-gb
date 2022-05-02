import Message from "../../components/presentations/Message";
import ChatList from "../../components/containers/ChatList";
import {useRef, useState} from "react";
import ControlPanel from "../../components/presentations/ControlPanel";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addMessageWithSaga} from "../../store/Duck/actions";
import {getMessageList, getProfileName} from "../../store/Duck/selectors";

const Chats = () => {
    const name = useSelector(getProfileName)
    const location = useParams()
    const dispatch = useDispatch();
    const messageList = useSelector(getMessageList)
    const [value, setValue] = useState('');
    const inputEl = useRef(null);

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        dispatch(addMessageWithSaga(location.id, {text: value, author: name}))
        setValue('');
        inputEl.current.focus();
    }

    return (<>
            <ChatList/>
            <div className="carryMessages">
                <div className='messages'>
                    {location.id && messageList[location.id] ? messageList[location.id].map((el, i) => (
                        <Message key={i} props={el}/>
                    )) : <h1>Select or create a chat</h1>}
                </div>
                {location.id && messageList[location.id] && <ControlPanel inputEl={inputEl} handleChange={handleChange} handleClick={handleClick} value={value}/>}
            </div>
        </>
    );
}

export default Chats;