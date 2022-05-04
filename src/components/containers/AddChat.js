import {Button, TextField} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addChatFBSaga, addChatMessagesFB, changeChatListSaga} from "../../store/Duck/actions";
import {useLocation, useParams} from "react-router-dom";

const AddChat = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const {id} = useParams();
    const location = useLocation();

    const handleClick = useCallback(()=>{
        dispatch(addChatFBSaga(value));
        dispatch(changeChatListSaga());
        setValue('')
    }, [dispatch, value])

    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(id)
    }

    useEffect(()=>{
        dispatch(changeChatListSaga());
    }, [id])

    return (
        <>
            <TextField placeholder={'Chat name'} value={value} onChange={handleChange}/>
            <Button onClick={handleClick}>Add a chat</Button>
        </>
    )
}

export default AddChat;