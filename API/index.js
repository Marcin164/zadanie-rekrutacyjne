const express = require("express")
const cors = require("cors")
const DeviceRoute = require("./Routes/device.routes.js")

const app = express()
app.use(cors())
app.use(express.json());

const PORT = 4000;

app.listen(PORT, () => console.log("Running on port: " + PORT))

app.use(DeviceRoute)