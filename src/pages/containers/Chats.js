import Message from "../../components/presentations/Message";
import ChatList from "../../components/containers/ChatList";
import {AUTHORS} from "../../constants/common";
import {useEffect, useRef, useState} from "react";
import ControlPanel from "../../components/presentations/ControlPanel";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../store/Duck/actions";
import {getMessageList, getProfileName} from "../../store/Duck/selectors";

const Chats = () => {
    const name = useSelector(getProfileName)
    const location = useParams()
    const dispatch = useDispatch();
    const messageList = useSelector(getMessageList)
    const [value, setValue] = useState('');
    const [timeoutID, setTimeoutID] = useState(0);
    const inputEl = useRef(null);

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        dispatch(addMessage(location.id, {text: value, author: name}))
        setValue('');
        inputEl.current.focus();
    }

    useEffect(() => {
        clearTimeout(timeoutID);
        if (messageList[location.id] && messageList[location.id].length) {
            let author = messageList[location.id].slice(-1)[0].author;
            setTimeoutID(setTimeout(() => {
                if (author === name) {
                    dispatch(addMessage(location.id, {text: 'Bot received the message', author: AUTHORS.bot}))
                }
            }, 1500))
        }
    }, [messageList[location.id]]);


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