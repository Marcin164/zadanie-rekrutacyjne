import axios from "axios"
import {fetchAllDevices, addDevice, removeDevice, updateDevice} from "../Services/APIService"

jest.mock('axios')

test('should fetch all devices', async () => {
    const devices = [{id: 1652857222685, name:"Fridge", description: "Fridge full od beer", disabled:true}]
    const response = {data: devices}
    axios.get.mockResolvedValue(response)

    return fetchAllDevices.then(data => expect(data).toEqual(devices))
})