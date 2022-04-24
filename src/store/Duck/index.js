import {createStore, combineReducers} from 'redux';
import * as reducers from './reducers';

const reducersState = combineReducers({
    profile: reducers.profileReducer,
    chats: reducers.chatsReducer,
    messages: reducers.messagesReducer
})

const store = createStore(reducersState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;