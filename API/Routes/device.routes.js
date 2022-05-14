const { Router } = require('express')
const DeviceController = require("../Controllers/device.controller")

const router = Router()

router.get('/populate', DeviceController.populate_get)
router.post('/addDevice', DeviceController.addDevice_post)
router.delete('/removeDevice', DeviceController.removeDevice_delete)
router.put('/updateDevice', DeviceController.updateDevice_put)
router.get('/getAllDevices', DeviceController.getAllDevices_get)

module.exports = router