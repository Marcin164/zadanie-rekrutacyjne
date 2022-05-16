import {call, put} from "redux-saga/effects"
import { requestGetDevice } from "../request/device"

export function* handleGetDevice(action){
    try {
        const response = yield call(requestGetDevice)
    } catch (error) {
        console.log(error)
    }
}