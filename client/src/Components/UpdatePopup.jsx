import { useState, useEffect } from "react"
import Input from "./Input"
import Checkbox from "./Checkbox"
import Button from "./Button";
import axios from "axios";
import PopupFrame from "../Layouts/PopupFrame";

const Popup = (props) => {
    const [data, setData] = useState({ id: props.id, name: props.name, description: props.description, disabled: props.disabled })
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const updateDevice = async () => {
        try {
            if (data.name.length < 1) throw "Name required"
            let response = await axios.put("http://localhost:4000/updateDevice", data)

            if(!response) throw "Cannot save device"
            setSuccessMessage(response.data)
        } catch (error) {
            setErrorMessage(error)
        }
    }

    const deleteDevice = async () => {
        try {
            await axios.delete("http://localhost:4000/removeDevice/"+props.id)
            window.location.reload()
        } catch (error) {
            setErrorMessage(error)
        }
    }

    const getData = (e) => {
        const dataObject = data
        let targetName = e.currentTarget.name
        let targetValue = e.currentTarget.value 
        dataObject[targetName] = targetValue
        setData(dataObject)
    }

    const getChecked = (e) => {
        const dataObject = data
        let targetName = e.currentTarget.name
        let targetChecked = e.currentTarget.checked
        dataObject[targetName] = targetChecked
        setData(dataObject)
    }

    return (
        <PopupFrame onClick={props.onClick}>
            <h1 className="mt-2">Device details</h1>
            {errorMessage !== "" ? <div className="alert alert-danger">{errorMessage}</div> : null}
            {successMessage !== "" ? <div className="alert alert-success">{successMessage}</div> : null}
            <Input title="ID" name="id" defaultValue={props.id} />
            <Input title="Device name" name="name" defaultValue={props.name} onChange={getData} />
            <Input title="Description" name="description" defaultValue={props.description} onChange={getData} />
            <Checkbox title="Disabled" defaultChecked={props.disabled} name="disabled" onChange={getChecked} />
            <div className="btn-group">
                <Button onClick={updateDevice}>Update</Button>
                <Button onClick={deleteDevice}>Delete</Button>
            </div>
        </PopupFrame>
    );
}

export default Popup;