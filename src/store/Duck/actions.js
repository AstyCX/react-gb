//Gists
export const GET_GISTS_REQUEST = 'GISTS::GET_GISTS_REQUEST';
export const GET_GISTS_REQUEST_SAGA = 'GISTS::GET_GISTS_REQUEST_SAGA';
export const GET_GISTS_SUCCESS = 'GISTS::GET_GISTS_SUCCESS';
export const GET_GISTS_FAIL = 'GISTS::GET_GISTS_FAIL';

export const getGistsRequestSaga = (api) => ({
    type: GET_GISTS_REQUEST_SAGA,
    payload: api
});

export const getGistsRequest = (api) => ({
    type: GET_GISTS_REQUEST,
    payload: api
});

export const getGistsSuccess = (gists) => ({
    type: GET_GISTS_SUCCESS,
    payload: gists
});

export const getGistsFail = (error) => ({
    type: GET_GISTS_FAIL,
    payload: error
});


//Chats
export const CHANGE_CHAT_LIST_FB = 'CHATS::CHANGE_CHAT_LIST_FB';
export const CHANGE_CHAT_LIST_SAGA = 'CHATS::CHANGE_CHAT_LIST_SAGA';
export const DEL_CHAT_FB_SAGA = 'CHATS::DEL_CHAT_FB_SAGA';
export const ADD_CHAT_FB_SAGA = 'CHATS::ADD_CHAT_FB_SAGA';

export const addChatFBSaga = (name) => ({
    type: ADD_CHAT_FB_SAGA,
    payload: name
})

export const delChatFBSaga = (id) => ({
    type: DEL_CHAT_FB_SAGA,
    payload: id
})

export const changeChatList = (chats) => ({
    type: CHANGE_CHAT_LIST_FB,
    payload: chats
});

export const changeChatListSaga = () => ({
    type: CHANGE_CHAT_LIST_SAGA
});


//Profile
export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name
});


//Messages
export const ADD_MESSAGE_FB_SAGA = 'MESSAGES::ADD_MESSAGE_FB';
export const CHANGE_MESSAGE_LIST_FB = 'MESSAGES::CHANGE_MESSAGE_LIST_FB';

export const changeMessageList = (msg) => ({
    type: CHANGE_MESSAGE_LIST_FB,
    payload: msg
})

export const addMessageFBSaga = (id, message) => ({
    type: ADD_MESSAGE_FB_SAGA,
    payload: {id, message}
})