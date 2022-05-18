import { useEffect, useState } from "react";
import DeviceCard from "../Components/DeviceCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchedDevices } from "../Redux/actions";

const Main = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const dispatch =  useDispatch()
    const devices = useSelector(state => state.devices.devices)

    useEffect(() => {
        fetchDevices()
        setInterval(fetchDevices, 30000);

        return function cleanup() {
            clearInterval(fetchDevices)
        };
    }, [])

    const fetchDevices = () => {
        try {
            dispatch(fetchedDevices())
            setIsLoaded(true)
        } catch (error) {
            setIsLoaded(false)
            setErrorMessage(error.message)
        }
    }

    if(!isLoaded) return <div className="container py-4 mt-2 text-center alert-info">Loading...</div>
    return ( 
        <div className="container mt-2">
            {errorMessage === "" && devices !== undefined ? devices.data.map((device) => (<DeviceCard key={device.id} id={device.id} name={device.name} description={device.description} disabled={device.disabled}/>)) : <div>{errorMessage}</div>}
        </div>
     );
}
 
export default Main;