import { useState } from "react";
import UpdatePopup from "./UpdatePopup";

const DeviceCard = (props) => {
    const [showUpdatePopup, setShowUpdatePopup] = useState(false)

    const togglePopup = () => {
        setShowUpdatePopup(!showUpdatePopup)
    }

    return (
        <>
            <div className="card mt-2" onClick={togglePopup}>
                <div className="card-title d-flex flex-row justify-content-between px-2 pt-2">
                    <div className="font-weight-bold">{props.name}</div>
                    <div className={`${props.disabled ? "alert-danger" : "alert-success"} px-2 py-1 rounded`}>{props.disabled ? "Disabled" : "Active"}</div>
                </div>
                <div className="card-text d-flex px-2 pb-2">ID: {props.id}</div>
            </div>
            {showUpdatePopup ? <UpdatePopup onClick={togglePopup} id={props.id} name={props.name} description={props.description} disabled={props.disabled}/> : null}
        </>
    );
}

export default DeviceCard;