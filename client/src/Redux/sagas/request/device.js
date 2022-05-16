import axios from "axios"

export const getDevices = () => {
    return axios.request({
        method: 'get',
        url: 'http://localhost:4000/getAllDevices'
    })
}