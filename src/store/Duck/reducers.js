import {
    ADD_CHAT,
    DEL_CHAT,
    ADD_CHAT_MESSAGES,
    ADD_MESSAGE,
    CHANGE_NAME,
    DEL_CHAT_MESSAGES,
    GET_GISTS_SUCCESS,
    GET_GISTS_REQUEST,
    GET_GISTS_FAIL,
    CHANGE_CHAT_LIST,
    ADD_CHAT_MESSAGES_FB,
    UPDATE_MESSAGES,
    CHANGE_MESSAGE_LIST
} from "./actions";
import {AUTHORS} from "../../constants/common";

/**
 * initialState = {
 *     chatList: [
 *         {
 *             id: string,
 *             name: string
 *         }
 *     ]
 * }
 */

const chatsReducer = (state = {
    chatList: []
}, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            const chatList = state.chatList || [];
            const chatId = chatList.length ? +chatList.slice(-1)[0].id + 1 : 1;

            return {
                ...state,
                chatList: [
                    ...chatList,
                    {
                        id: chatId,
                        name: action.payload
                    }
                ]
            }
        }
        case DEL_CHAT: {
            const a = {
                ...state,
                chatList: []
            };
            for (let i of state.chatList) {
                if (i.id !== action.payload) {
                    a.chatList = [...a.chatList, i];
                }
            }
            return a;
        }
        case CHANGE_CHAT_LIST: {
            return {
               chatList: action.payload
            }
        }
        default:
            return state;
    }
}

/**
 * initialState = {
 *     messageList: {
 *         id: [
 *             {
 *                 text: string,
 *                 author: string,
 *                 id: string
 *             }
 *         ]
 *     }
 * }
 */

const messagesReducer = (state = {
    messageList: {}
}, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE_LIST:
            return {
                ...state,
                messageList: action.payload
            }
        case ADD_MESSAGE: {
            const {id, message} = action.payload;
            const oldMessages = state.messageList[id] || [];

            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [id]: [
                        ...oldMessages,
                        {
                            ...message,
                            id: `${id}${oldMessages.length}`
                        }
                    ]
                }
            }
        }
        case ADD_CHAT_MESSAGES: {
            const id = Object.keys(state.messageList).length ? +Object.keys(state.messageList).slice(-1)[0]+1 : 1;

            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [id]: []
                }
            }
        }
        case ADD_CHAT_MESSAGES_FB:
            return {
                ...state,
                messageList: action.payload
            }
        case DEL_CHAT_MESSAGES: {
            const a = {
                ...state,
                messageList: {}
            };
            for (let i in state.messageList) {
                if (i !== String(action.payload)) {
                    a.messageList = {...a.messageList, [i]: state.messageList[i]};
                }
            }
            return a;
        }
        default:
            return state;
    }
}

/**
 * initialState = {
 *     checked: boolean
 * }
 */

const profileReducer = (state = {
    name: AUTHORS.me
}, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            };
        default:
            return state;
    }
}

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3
}

/**
 * initialState = {
 *     gists: [],
 *     request: number,
 *     error: {
 *         event: boolean,
 *         description: string
 *     }
 * }
 */

const gistsReducer = (state = {
    gists: [],
    request: STATUSES.IDLE,
    error: {
        description: '',
        event: null
    }
}, action) => {
    switch (action.type) {
        case GET_GISTS_SUCCESS:
            return {
                ...state,
                gists: action.payload,
                request: STATUSES.SUCCESS,
                error: {
                    ...state.error,
                    event: false
                }
            }
        case GET_GISTS_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST
            }
        case GET_GISTS_FAIL:
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: {
                    ...state.error,
                    description: action.payload,
                    event: true
                }
            }
        default:
            return state;
    }
}

export {
    messagesReducer,
    chatsReducer,
    profileReducer,
    gistsReducer
}