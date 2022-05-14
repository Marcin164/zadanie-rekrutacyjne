const validator = require('validator');

class Device {
    constructor(device){
        this.devices = device
    }

    populate(){
        this.devices.push({id: Date.now(), name:"Device 1", description: "A good device", disabled:false})
        this.devices.push({id: Date.now()+1, name:"Device 2", description: "A great device", disabled:false})
        this.devices.push({id: Date.now()+2, name:"Device 3", description: "Best device", disabled:true})
        return "Populated!"
    }

    addDevice(name, description, disabled){
        console.log("Odpala sie")

        if(validator.isEmpty(name)) throw Error("Name cannot be empty!")
        if(!validator.isBoolean(disabled.toString())) throw Error("Value must be true or false!")

        const id = Date.now()

        this.devices.push({id, name, description, disabled})
        return "Saved!"
    }

    removeDevice(id){
        let index = this.devices.findIndex(device => device.id === id)
        if(index === -1) throw Error("Element does not exists!")
        this.devices.splice(index, 1)
        return "Deleted!"
    }

    updateDevice(id, name, description, disabled){
        if(validator.isEmpty(name)) throw Error("Name cannot be empty!")
        if(!validator.isBoolean(disabled.toString())) throw Error("Value must be true or false!")

        let index = this.devices.findIndex(device => device.id === id)
        if(!index) throw Error("Element does not exists!")

        this.devices.splice(index, 1)
        this.devices.push({id, name, description, disabled})

        return "Updated!"
    }

    getAllDevices(){
        return this.devices
    }
}

module.exports = {
    Device
};