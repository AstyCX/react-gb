import {Android, Person} from "@mui/icons-material";
import Message from "../components/Message";
import ChatList from "../components/ChatList";
import {AUTHORS} from "../constants/common";
import {useEffect, useRef, useState} from "react";
import ControlPanel from "../components/ControlPanel";
import {useParams} from "react-router-dom";

const initialChats = {
    1: {
        title: 'chat1',
        icon: <Android />,
        messages: [
            {text: 'Hello!', author: AUTHORS.bot}
        ]
    },
    2: {
        title: 'chat2',
        icon: <Person />,
        messages: [
            {text:'Hello2', author: AUTHORS.bot}
        ]
    }
}

const Chats = () => {
    const location = useParams()
    const [chats, setChats] = useState(initialChats);
    const [value, setValue] = useState('');
    const [timeoutID, setTimeoutID] = useState(0);
    const inputEl = useRef(null);

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        console.log(JSON.parse(JSON.stringify(chats)))
        setChats(()=>{
            const icons = Object.values(chats).map(el=>el.icon);
            let h = JSON.parse(JSON.stringify(chats));
            for (let i = 1; i <= Object.keys(h).slice(-1)[0]; i++) {
                h[i].icon = icons[i-1];
            }
            h[location.id].messages = [...h[location.id].messages, {text: value, author: AUTHORS.me}];
            return h;
        });
        setValue('');
        inputEl.current.focus();
    }

    useEffect(() => {
        clearTimeout(timeoutID);
        if (chats[location.id].messages[0]) {
            let author = chats[location.id].messages.slice(-1)[0].author;
            setTimeoutID(setTimeout(() => {
                if (author === AUTHORS.me) {
                    setChats(()=>{
                        const ic = Object.values(chats).map(el=>el.icon);
                        let h = JSON.parse(JSON.stringify(chats));
                        for (let i = 1; i <= Object.keys(h).slice(-1)[0]; i++) {
                            h[i].icon = ic[i-1];
                        }
                        h[location.id].messages = [...h[location.id].messages, {text: 'Bot received the message', author: AUTHORS.bot}];
                        return h;
                    })
                }
            }, 1500))
        }
        console.log(chats[location.id].messages)
    }, [chats[location.id].messages]);


    return (<>
            <ChatList chats={chats} setChats={setChats}/>
            <div className="carryMessages">
                <div className='messages'>
                    {chats[location.id].messages.map((el, i) => (<Message key={i} props={el}/>))}
                </div>
                <ControlPanel inputEl={inputEl} handleChange={handleChange} handleClick={handleClick} value={value}/>
            </div>
        </>
    );
}

export default Chats;