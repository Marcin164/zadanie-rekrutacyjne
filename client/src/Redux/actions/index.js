export const FETCH_DEVICES = "FETCH_DEVICES"
export const FETCH_DEVICES_SUCCESS = "FETCH_DEVICES_SUCCESS"
export const FETCH_DEVICES_ERROR = "FETCH_DEVICE_ERROR"

export const fetchedDevices = (devices) => ({
    type: FETCH_DEVICES,
    devices,
})