import { put, takeEvery, call } from "redux-saga/effects";

import { hotelsActions } from "./actions";

import { getHoutels } from "../api";

export function* sagaWotcher() {
    yield takeEvery("FETCH_HOTELS", sagaWorker);
}

function* sagaWorker({ data }) {
    yield put(hotelsActions.setLoading());
    const payload = yield call(() => getHoutels(data));
    yield put({ type: "SET_HOTELS", payload });
}
