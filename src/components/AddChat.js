import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {Person} from "@mui/icons-material";

const AddChat = ({chats, setChats}) => {
    const [value, setValue] = useState('');

    const handleClick = () => {
        setChats(()=>{
            const icons = Object.values(chats).map(el=>el.icon)
            let h = JSON.parse(JSON.stringify(chats));
            for (let i = 1; i <= Object.keys(h).slice(-1)[0]; i++) {
                h[i].icon = icons[i-1];
            }
            h[+(Object.keys(chats).slice(-1)[0])+1] = {
                title: value,
                icon: <Person />,
                messages: [],
                changed: false
            }
            return h
        })
        console.log(chats);
        setValue('');
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <TextField placeholder={'Chat name'} value={value} onChange={handleChange}/>
            <Button onClick={handleClick}>Add a chat</Button>
        </>
    )
}

export default AddChat;