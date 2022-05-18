import {call, put, takeEvery} from "redux-saga/effects"
import { FETCH_DEVICES, FETCH_DEVICES_SUCCESS, FETCH_DEVICES_ERROR } from "../actions"
import {fetchAllDevices} from "../../Services/APIService"

async function devicesFetch(){
    const res = await fetchAllDevices()
    return res
}

function* handleFetchDevice(){
    try {
        const devices = yield call(devicesFetch)
        yield put({ type: FETCH_DEVICES_SUCCESS, devices})
    } catch (error) {
        yield put({type: FETCH_DEVICES_ERROR, error:error.message})
    }

}

export default function* completeSaga(){
    yield takeEvery(FETCH_DEVICES, handleFetchDevice)
}