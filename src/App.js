import './App.css';
import {useEffect, useState} from "react";
import Message from "./components/Message";
import {AUTHORS} from "./constants/common";

function App() {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const [timeoutID, setTimeoutID] = useState(0);

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleClick = () => {
        setMessages([...messages, {text: value, author: AUTHORS.me}])
        setValue('')
    }
    useEffect(() => {
        clearTimeout(timeoutID);
        if (messages[0]) {
            let author = messages.slice(-1)[0].author;
            setTimeoutID(setTimeout(() => {
                if (author === AUTHORS.me) {
                    setMessages([...messages, {text: 'Received (a) message(s)', author: AUTHORS.bot}])
                }
            }, 1000))
        }
    }, [messages])

    return (
        <div className="App">
            <header className="App-header">
                <h1>My Messenger</h1>
            </header>
            <main className='App-main'>
                <div className='messages'>
                    {messages.map((el, i) => (<Message key={i} props={el}/>))}
                </div>
                <div className='sendMess'>
                    <form>
                        <input type='text' onChange={handleChange} value={value}/>
                        <div onClick={handleClick}>Send a message</div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default App;
