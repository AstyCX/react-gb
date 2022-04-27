export const CHANGE_NAME = 'CHANGE_NAME';
export const ADD_CHAT = 'ADD_CHAT';
export const DEL_CHAT = 'DEl_CHAT';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const ADD_CHAT_MESSAGES = 'ADD_CHAT_MESSAGES';
export const DEL_CHAT_MESSAGES = 'DEL_CHAT_MESSAGES'

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name
});

export const addMessage = (id, message) => ({
    type: ADD_MESSAGE,
    payload: {id, message}
});

export const delChat = (id) => ({
    type: DEL_CHAT,
    payload: id
});

export const addChatMessages = () => ({
    type: ADD_CHAT_MESSAGES
});

export const delChatMessages = id => ({
    type: DEL_CHAT_MESSAGES,
    payload: id
})

export const addChat = (title) => ({
    type: ADD_CHAT,
    payload: title
});
