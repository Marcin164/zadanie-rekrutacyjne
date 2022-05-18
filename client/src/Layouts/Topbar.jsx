import {useState} from "react"
import Button from "../Components/Button"
import AddPopup from "../Components/AddPopup";

const Topbar = () => {
    const [showUpdatePopup, setShowUpdatePopup] = useState(false)

    const togglePopup = () => {
        setShowUpdatePopup(!showUpdatePopup)
    }

    const refresh = () => {
        window.location.reload()
    }

    return (
        <>
        <div className="d-flex flex-row justify-content-around align-items-center pt-2 pb-2">
            <div className="d-flex flex-row"><span className="font-weight-bold">Device list</span></div>
            <div className="btn-group justify-content-between">
                <Button className="mr-1" onClick={refresh}>Refresh list</Button>
                <Button className="ml-1" onClick={togglePopup}>Add device</Button>
            </div>
        </div>
        {showUpdatePopup ? <AddPopup onClick={togglePopup}/> : null}
        </>
    );
}

export default Topbar;