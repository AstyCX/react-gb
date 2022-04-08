import './App.css';
import {useEffect, useRef, useState} from "react";
import Message from "./components/Message";
import {AUTHORS} from "./constants/common";
import ChatList from "./components/ChatList";
import {Android, Person, Send} from "@mui/icons-material";
import {Button, TextField} from "@mui/material";

function App() {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const [timeoutID, setTimeoutID] = useState(0);
    const inputEl = useRef(null);
    useRef()
    const [chatList, setChatList] = useState([{
        title: 'Bot',
        id: 'bot',
        icon: <Android/>
    }, {
        title: 'User',
        id: 'user1',
        icon: <Person/>
    }])

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleClick = () => {
        setMessages([...messages, {text: value, author: AUTHORS.me}])
        setValue('');
        inputEl.current.focus();
    }

    useEffect(() => {
        clearTimeout(timeoutID);
        if (messages[0]) {
            let author = messages.slice(-1)[0].author;
            setTimeoutID(setTimeout(() => {
                if (author === AUTHORS.me) {
                    setMessages([...messages, {text: 'Received (a) message(s)', author: AUTHORS.bot}])
                }
            }, 1500))
        }
    }, [messages])

    return (
        <div className="App">
            <header className="App-header">
                <h1>My Messenger</h1>
            </header>
            <main className='App-main'>
                <ChatList chats={chatList}/>
                <div className="carryMessages">
                    <div className='messages'>
                        {messages.map((el, i) => (<Message key={i} props={el}/>))}
                    </div>
                    <div className='sendMess'>
                        <TextField ref={inputEl} id="outlined-basic" label="Type here" variant="outlined" onChange={handleChange} value={value} className={'messageArea'}/>
                        <Button onClick={handleClick} variant="contained"><Send/></Button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
