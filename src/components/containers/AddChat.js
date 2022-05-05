import {Button, TextField} from "@mui/material";
import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {addChatFBSaga, changeChatListSaga} from "../../store/Duck/actions";

const AddChat = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleClick = useCallback(()=>{
        dispatch(addChatFBSaga(value));
        dispatch(changeChatListSaga());
        setValue('')
    }, [dispatch, value])

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <TextField placeholder={'Chat name'}
                       value={value}
                       onChange={handleChange}/>
            <Button onClick={handleClick}>Add a chat</Button>
        </>
    )
}

export default AddChat;