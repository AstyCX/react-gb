import {
    ADD_CHAT_FB_SAGA,
    ADD_MESSAGE_FB_SAGA,
    CHANGE_NAME_FB_SAGA,
    changeChatList,
    changeMessageList, changeProfile,
    DEL_CHAT_FB_SAGA,
    GET_GISTS_REQUEST_SAGA,
    getGistsFail,
    getGistsRequest,
    getGistsSuccess, UPDATE_DB_SAGA,
} from "../store/Duck/actions";
import {put, delay, takeEvery, takeLatest, call} from 'redux-saga/effects'
import {AUTHORS} from "../constants/common";
import {fetchData} from "./api";
import {addChat, removeChat, trackDB, addMessage, changeName} from "./firebaseActions";


function* requestAPIData(action) {
    yield put(getGistsRequest(action.payload));
    try {
        const data = yield call(fetchData, action.payload);
        yield put(getGistsSuccess(data));
    } catch (e) {
        yield put(getGistsFail(e))
    }
}

function* initTrackerWithFB() {
    const [chats, msg, name] = yield call(trackDB);
    yield put(changeChatList(chats));
    yield put(changeMessageList(msg));
    yield put(changeProfile(name));
}

function* addChatFB(action) {
    yield call(addChat, action.payload);
}

function* removeChatFB(action) {
    yield call(removeChat, action.payload);
}

function* addMessageFB(action) {
    yield call(addMessage, action.payload.id, {text: action.payload.message.text, author: AUTHORS.me});
    yield delay(1500);
    yield call(addMessage, action.payload.id, {text: 'Bot received the message', author: AUTHORS.bot});
    const [chats, msg] = yield call(trackDB);
    yield put(changeChatList(chats));
    yield put(changeMessageList(msg));
}

function* changeNameFB(action) {
    yield call(changeName, action.payload)
}

export default function* rootSaga () {
    yield takeEvery(GET_GISTS_REQUEST_SAGA, requestAPIData);
    yield takeEvery(UPDATE_DB_SAGA, initTrackerWithFB);
    yield takeEvery(ADD_CHAT_FB_SAGA, addChatFB);
    yield takeEvery(DEL_CHAT_FB_SAGA, removeChatFB);
    yield takeEvery(CHANGE_NAME_FB_SAGA, changeNameFB)
    yield takeLatest(ADD_MESSAGE_FB_SAGA, addMessageFB);
}

