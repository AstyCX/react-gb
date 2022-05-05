import {
    ADD_CHAT_FB_SAGA,
    ADD_MESSAGE_FB_SAGA,
    CHANGE_CHAT_LIST_SAGA,
    changeChatList,
    changeMessageList,
    DEL_CHAT_FB_SAGA,
    GET_GISTS_REQUEST_SAGA,
    getGistsFail,
    getGistsRequest,
    getGistsSuccess,
} from "../store/Duck/actions";
import {put, delay, takeEvery, takeLatest, call} from 'redux-saga/effects'
import {AUTHORS} from "../constants/common";
import {fetchData} from "./api";
import {addChat, removeChat, trackDB, addMessage} from "./firebaseActions";


function* requestAPIData(action) {
    yield put(getGistsRequest(action.payload));
    try {
        const data = yield call(()=>fetchData(action.payload));
        yield put(getGistsSuccess(data));
    } catch (e) {
        yield put(getGistsFail(e))
    }
}

function* initTrackerWithFB() {
    const [chats, msg] = yield call(trackDB);
    yield put(changeChatList(chats));
    yield put(changeMessageList(msg));
}

function* addChatFB(action) {
    yield call(addChat, action.payload);
}

function* removeChatFB(action) {
    yield call(removeChat, action.payload);
}

function* addMessageFB(action) {
    yield call(addMessage, action.payload.id, action.payload.message);
    yield delay(1500);
    yield call(addMessage, action.payload.id, {text: 'Bot received the message', author: AUTHORS.bot});
    const [chats, msg] = yield call(trackDB);
    yield put(changeChatList(chats));
    yield put(changeMessageList(msg));
}

export default function* rootSaga () {
    yield takeEvery(GET_GISTS_REQUEST_SAGA, requestAPIData);
    yield takeEvery(CHANGE_CHAT_LIST_SAGA, initTrackerWithFB);
    yield takeEvery(ADD_CHAT_FB_SAGA, addChatFB);
    yield takeEvery(DEL_CHAT_FB_SAGA, removeChatFB);
    yield takeLatest(ADD_MESSAGE_FB_SAGA, addMessageFB);
}

