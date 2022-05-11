import Message from "../../components/presentations/Message";
import ChatList from "../../components/containers/ChatList";
import {useRef, useState} from "react";
import ControlPanel from "../../components/presentations/ControlPanel";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addMessageFBSaga, updateDBSaga} from "../../store/Duck/actions";
import {getMessageList, getProfileName} from "../../store/Duck/selectors";
import {AUTHORS} from "../../constants/common";

const Chats = () => {
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
        dispatch(addMessageFBSaga(id, {text: value, author: name}));
        dispatch(updateDBSaga());
        setValue('');
        inputEl.current.focus();
    }

    return (<>
            <ChatList/>
            <div className="carryMessages">
                <div className='messages'>
                    {id && messageList[id] ? messageList[id].map((el, i) => (
                        <Message key={i} props={{text: el.text, author: el.author === AUTHORS.me ? name : AUTHORS.bot}}/>
                    )) : <h1>Select or create a chat</h1>}
                </div>
                {id && messageList[id] &&
                    <ControlPanel inputEl={inputEl} handleChange={handleChange} handleClick={handleClick}
                                  value={value}/>}
            </div>
        </>
    );
}

export default Chats;