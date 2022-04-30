import {ADD_MESSAGE_WITH_SAGA, addMessage} from "./actions";
import {put, delay, takeLatest} from 'redux-saga/effects'
import {AUTHORS} from "../../constants/common";

function* handleMessage(action) {
    yield put(addMessage(action.payload.id, action.payload.message));
    if (action.payload.message.author !== AUTHORS.bot) {
        const message = {text: 'Bot received the message', author: AUTHORS.bot};
        yield delay(1500);
        yield put(addMessage(action.payload.id, message));
    }
}

function* mySaga () {
    yield takeLatest(ADD_MESSAGE_WITH_SAGA, handleMessage);
}

export default mySaga;