import {
    CHANGE_CHAT_LIST_FB,
    CHANGE_MESSAGE_LIST_FB,
    CHANGE_NAME_FB, GET_GISTS_FAIL,
    GET_GISTS_REQUEST,
    GET_GISTS_SUCCESS
} from "../../store/Duck/actions";
import {chatsReducer, gistsReducer, messagesReducer, profileReducer, STATUSES} from "../../store/Duck/reducers";

describe('Chats reducer test', () => {
    const state = {
        chatList: []
    };

    it('CHANGE_CHAT_LIST', () => {
        const action = (chats) => ({
            type: CHANGE_CHAT_LIST_FB,
            payload: chats
        }), chats = [
            {id: 'qweqwe', name: 'Chat1'}, {id: '123123', name: 'Chat2'}
        ];

        const result = chatsReducer(state, action(chats))

        expect(result).toEqual({
            chatList: [
                {id: 'qweqwe', name: 'Chat1'}, {id: '123123', name: 'Chat2'}
            ]
        })
    })
})

describe('Messages reducer test', () => {
    const state = {
        messageList: {}
    };

    it('CHANGE_MESSAGES_LIST_FB', () => {
        const action = (msg) => ({
            type: CHANGE_MESSAGE_LIST_FB,
            payload: msg
        }), msg = {
            'key1': {text: '123123123', author: 'test-bot'},
            'key2': {text: '123535', author: 'test-bot2'},
            'key3': {text: '2343324234342', author: 'test-bot3'},
            'key4': {text: '432342', author: 'test-bot4'}
        };

        const result = messagesReducer(state, action(msg))

        expect(result).toEqual({
            messageList: {
                'key1': {text: '123123123', author: 'test-bot'},
                'key2': {text: '123535', author: 'test-bot2'},
                'key3': {text: '2343324234342', author: 'test-bot3'},
                'key4': {text: '432342', author: 'test-bot4'}
            }
        })
    });
})

describe('Profile reducer test', () => {
    const state = {
        name: ''
    };

    it('CHANGE_NAME_FB', () => {
        const action = (name) => ({
            type: CHANGE_NAME_FB,
            payload: name
        }), name = 'ChangedName';

        const result = profileReducer(state, action(name))

        expect(result).toEqual({
            name: 'ChangedName'
        })
    });
})

describe('Gists reducer test', () => {
    const state = {
        gists: [],
        request: STATUSES.IDLE,
        error: {
            description: '',
            event: null
        }
    };

    it('GET_GISTS_SUCCESS', () => {
        const action = (gists) => ({
            type: GET_GISTS_SUCCESS,
            payload: gists
        }), gists = [
            {key:'123123', description: 'gist11'},
            {key:'1231323', description: 'gist12'},
            {key:'123234123', description: 'gist13'},
            {key:'123234123', description: 'gist14'},
            {key:'123234123', description: 'gist15'},
        ]

        const result = gistsReducer(state, action(gists));

        expect(result).toEqual({
            ...state,
            gists: gists,
            request: STATUSES.SUCCESS,
            error: {
                ...state.error,
                event: false
            }
        })
    });
    it('GET_GISTS_REQUEST', () => {
        const action = () => ({
            type: GET_GISTS_REQUEST
        });

        const result = gistsReducer(state, action());

        expect(result).toEqual({
            ...state,
            request: STATUSES.REQUEST
        })
    });
    it('GET_GISTS_FAIL', () => {
        const action = (error) => ({
            type: GET_GISTS_FAIL,
            payload: error
        }), error = 'MyErrorDescription';

        const result = gistsReducer(state, action(error));

        expect(result).toEqual({
            ...state,
            request: STATUSES.FAILURE,
            error: {
                ...state.error,
                description: error,
                event: true
            }
        })
    });
});