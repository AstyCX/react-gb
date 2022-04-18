import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {Person} from "@mui/icons-material";

const AddChat = ({chats, setChats}) => {
    const [value, setValue] = useState('');

    const handleClick = () => {
        setChats(()=>{
            const h = chats;
            h[+(Object.keys(chats).slice(-1)[0])+1] = {
                title: value,
                icon: <Person />,
                messages: []
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