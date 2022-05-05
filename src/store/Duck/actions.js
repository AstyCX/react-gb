export const CHANGE_NAME = 'CHANGE_NAME';
export const ADD_CHAT = 'ADD_CHAT';
export const DEL_CHAT = 'DEl_CHAT';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const ADD_CHAT_MESSAGES = 'ADD_CHAT_MESSAGES';
export const DEL_CHAT_MESSAGES = 'DEL_CHAT_MESSAGES';
export const ADD_MESSAGE_WITH_SAGA = 'ADD_MESSAGE_WITH_SAGA';

export const GET_GISTS_REQUEST = 'GET_GISTS_REQUEST';
export const GET_GISTS_REQUEST_SAGA = 'GET_GISTS_REQUEST_SAGA';
export const GET_GISTS_SUCCESS = 'GET_GISTS_SUCCESS';
export const GET_GISTS_FAIL = 'GET_GISTS_FAIL';


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

// export const getAllGists = () => async (dispatch, getState) => {
//     try {
//         const response = await fetch(API_URL_PUBLIC);
//         if(!response.ok) {
//             throw new Error('Failed with fetching')
//         }
//         const result = response.json();
//         dispatch(getGistsSuccess(result))
//     } catch (e) {
//         console.error(e)
//     }
// }

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name
});

export const addMessage = (id, message) => ({
    type: ADD_MESSAGE,
    payload: {id, message}
});

export const addMessageWithSaga = (id, message) => ({
    type: ADD_MESSAGE_WITH_SAGA,
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