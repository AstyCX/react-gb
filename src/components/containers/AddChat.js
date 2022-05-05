import {Button, TextField} from "@mui/material";
import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {addChat, addChatMessages} from "../../store/Duck/actions";

const AddChat = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleClick = useCallback(()=>{
        dispatch(addChatMessages())
        dispatch(addChat(value));
        setValue('')
    }, [dispatch, value])

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