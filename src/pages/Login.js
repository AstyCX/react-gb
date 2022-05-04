import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from "../hooks/AuthProvider";
import {toast, ToastContainer} from "react-toastify";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {Person} from "@mui/icons-material";

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const auth = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let from = location.state?.from?.pathname || '/';

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.signin({email, password}, ()=>{
                setTimeout(()=>{
                    navigate(from, {replace: true})
                }, 1000)
            })
        } catch (e) {
            setError(e.message);
            toast.error('Error', {
                position: toast.POSITION.TOP_LEFT
            })
            console.error(e)
        }
    }

    return <div className='login'>
        <ToastContainer />
        <form onSubmit={onSubmit} className={`formLogin ${error ? 'errorFormLogin' : ''}`}>
            <TextField
                className='logInput'
                value={email}
                label='Your email'
                variant='outlined'
                onChange={handleEmailChange}
                type='email'
                required
            />
            <TextField
                className='logInput'
                value={password}
                label='Your password'
                variant='outlined'
                onChange={handlePasswordChange}
                type='password'
                required
            />
            <Button
                className='submitLog'
                type='submit'
            >Login <Person /></Button>
            {error && <p>{error}</p>}
        </form>
    </div>
}

export default Login;