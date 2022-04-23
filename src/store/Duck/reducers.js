import {ADD_CHAT, DEL_CHAT, ADD_CHAT_MESSAGES, ADD_MESSAGE, CHANGE_NAME, DEL_CHAT_MESSAGES} from "./actions";
import {Person} from "@mui/icons-material";
import {AUTHORS} from "../../constants/common";

/**
 * initialState = {
 *     chatList: [
 *         {
 *             id: string,
 *             icon: React.component,
 *             title: string
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
                        icon: <Person />,
                        title: action.payload
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

export {
    messagesReducer,
    chatsReducer,
    profileReducer
}