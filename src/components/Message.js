import {Paper} from "@mui/material";

const Message = ({props}) => {
    return (
        <Paper className={'message'}>
            <div className='messageText'>Text: {props.text}</div>
            <div className='messageAuthor'>Author: {props.author}</div>
        </Paper>
    )
}

export default Message;