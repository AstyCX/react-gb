import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from "./sagas";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()

const reducersState = combineReducers({
    profile: reducers.profileReducer,
    chats: reducers.chatsReducer,
    messages: reducers.messagesReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducersState)

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);

export {persistor, store}

export default store;

sagaMiddleware.run(mySaga);