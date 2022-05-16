import { useEffect, useState } from "react";
import axios from "axios"
import DeviceCard from "../Components/DeviceCard";
import { connect } from "react-redux";
import { fetchedDevices } from "../Redux/actions";

const Main = (props) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        fetchDevices()
        setInterval(fetchDevices, 30000);

        return function cleanup() {
            clearInterval(fetchDevices)
        };
    }, [])

    const fetchDevices = async () => {
        console.log("Pobieranie!")
        try {
            let response = await axios.get("http://localhost:4000/getAllDevices")

            if(!response) throw "Cannot fetch devices!"
            if(response.data.length < 1) setErrorMessage("No devices found!")

            setIsLoaded(true)
            props.fetchedDevices(response.data)
        } catch (error) {
            setIsLoaded(false)
            setErrorMessage(error)
        }
    }

    if(!isLoaded) return <div className="container py-4 mt-2 text-center alert-info">Loading...</div>
    return ( 
        <div className="container mt-2">
            {errorMessage === "" ? props.devices.map((device) => (<DeviceCard key={device.id} id={device.id} name={device.name} description={device.description} disabled={device.disabled}/>)) : <div>{errorMessage}</div>}
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
        devices: state.devices,
    }
}

const mapDispatchToProps = { fetchedDevices }
 
export default connect(mapStateToProps, mapDispatchToProps)(Main);