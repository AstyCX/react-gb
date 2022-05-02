import {useDispatch, useSelector} from "react-redux";
import {changeName} from "../../store/Duck/actions";
import {Button, TextField} from "@mui/material";
import {useCallback, useRef, useState} from "react";
import {Send} from "@mui/icons-material";

const Profile = () => {
    const name = useSelector(state=>state.profile.name)
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const inputEl = useRef(null);

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = useCallback(()=>{
        dispatch(changeName(value))
        setValue('')
    }, [dispatch, value])

    return <div className='changeName'>
        <h1>User name is: {name}</h1>
        <TextField autoFocus ref={inputEl} id="outlined-basic" label="Your name" variant="outlined"
                   onChange={handleChange} value={value} className={'nameArea'}/>
        <Button onClick={handleClick} variant="contained"><Send/></Button>
    </div>
}

export default Profile;