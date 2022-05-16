const {Device} = require("../Database/devices")

let deviceArray = []
const deviceClass = new Device(deviceArray)

module.exports.populate_get = (req, res) => {
    try {
        let populate = deviceClass.populate()
        res.status(200).send(populate)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports.addDevice_post = (req, res) => {
    try {
        const {name, description, disabled} = req.body
        let addDevice = deviceClass.addDevice(name, description, disabled)
        res.status(200).send(addDevice)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

module.exports.removeDevice_delete = (req, res) => {
    try {
        let {id} = req.params
        let removeDevice = deviceClass.removeDevice(id)
        res.status(200).send(removeDevice)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

module.exports.updateDevice_put = (req, res) => {
    try {
        let {id, name, description, disabled} = req.body
        let updateDevice = deviceClass.updateDevice(id, name, description, disabled)
        res.status(200).send(updateDevice)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

module.exports.getAllDevices_get = (req, res) => {
    try {
        let getAllDevices = deviceClass.getAllDevices()
        res.status(200).send(getAllDevices)
    } catch (error) {
        res.status(400).send(error)
    }
}