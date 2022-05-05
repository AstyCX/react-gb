import {
    CHANGE_NAME,
    GET_GISTS_SUCCESS,
    GET_GISTS_REQUEST,
    GET_GISTS_FAIL,
    CHANGE_CHAT_LIST_FB,
    CHANGE_MESSAGE_LIST_FB
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
        case CHANGE_CHAT_LIST_FB: {
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
        case CHANGE_MESSAGE_LIST_FB:
            return {
                ...state,
                messageList: action.payload
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