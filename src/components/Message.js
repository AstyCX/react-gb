const Message = ({props}) => {
    return <div className={'message'}>
        <div className='messageText'>Text: {props.text}</div>
        <div className='messageAuthor'>Author: {props.author}</div>
    </div>;
}

export default Message;