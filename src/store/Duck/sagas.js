import {
    ADD_MESSAGE_WITH_SAGA,
    addMessage,
    GET_GISTS_REQUEST_SAGA, getGistsFail,
    getGistsRequest,
    getGistsSuccess
} from "./actions";
import {put, delay, takeEvery, takeLatest, call} from 'redux-saga/effects'
import {AUTHORS} from "../../constants/common";
import {fetchData} from "./api";


function* handleMessage(action) {
    yield put(addMessage(action.payload.id, action.payload.message));
    if (action.payload.message.author !== AUTHORS.bot) {
        const message = {text: 'Bot received the message', author: AUTHORS.bot};
        yield delay(1500);
        yield put(addMessage(action.payload.id, message));
    }
}

function* requestAPIData(action) {
    console.log(action)
    yield put(getGistsRequest(action.payload));
    try {
        const data = yield call(()=>fetchData(action.payload));
        console.log(data)
        yield put(getGistsSuccess(data));
    } catch (e) {
        yield put(getGistsFail(e))
    }
}

export default function* rootSaga () {
    yield takeLatest(ADD_MESSAGE_WITH_SAGA, handleMessage);
    yield takeEvery(GET_GISTS_REQUEST_SAGA, requestAPIData);

}
