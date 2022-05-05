import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()

const reducersState = combineReducers({
    profile: reducers.profileReducer,
    chats: reducers.chatsReducer,
    messages: reducers.messagesReducer,
    gists: reducers.gistsReducer
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

sagaMiddleware.run(rootSaga);