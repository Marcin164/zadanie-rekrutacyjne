import axios from "axios"

export const fetchAllDevices = async() => {
    const response = await axios.get("http://localhost:4000/getAllDevices")
    return response
}

export const addDevice = async (data) => {
    if (data.name.length < 1) throw "Name required"
    const response = await axios.post("http://localhost:4000/addDevice", data)
    if(!response) throw "Cannot save device"
    return response
}

export const updateDevice = async (data) => {
    if (data.name.length < 1) throw "Name required"
    const response = await axios.put("http://localhost:4000/updateDevice", data)
    if(!response) throw "Cannot save device"
    return response
}

export const deleteDevice = async (id) => {
    const response = await axios.delete("http://localhost:4000/removeDevice/"+id)
    return response
}