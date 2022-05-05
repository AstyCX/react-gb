import {useState} from "react";
import {Button, TextField} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {getAuth} from "firebase/auth";
import firebaseConfig from "../../services/firebase-config";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth(firebaseConfig);
            await createUserWithEmailAndPassword(auth, email, password)
            toast.success('Success', {
                position: toast.POSITION.TOP_LEFT
            })
            setPassword('');
            setEmail('');
            setError('');
        } catch (e) {
            setError(e.message);
            toast.error('Error', {
                position: toast.POSITION.TOP_LEFT
            })
            console.error(e)
        }
    }

    return <div className='registration'>
        <ToastContainer />
        <form onSubmit={onSubmit} className={`formRegistration ${error ? 'errorFormRegistration' : ''}`}>
            <TextField
                className='regInput'
                value={email}
                label='Your email'
                variant='outlined'
                onChange={handleEmailChange}
                type='email'
                required
            />
            <TextField
                className='regInput'
                value={password}
                label='Your password'
                variant='outlined'
                onChange={handlePasswordChange}
                type='password'
                required
            />
            <Button
                className='submitReg'
                type='submit'
            >Register <AddCircleIcon /></Button>
            {error && <p>{error}</p>}
        </form>
    </div>
}

export default Registration;