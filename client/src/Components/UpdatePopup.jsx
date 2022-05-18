import { useState } from "react"
import Input from "./Input"
import Checkbox from "./Checkbox"
import Button from "./Button";
import PopupFrame from "../Layouts/PopupFrame";
import Header from "../Components/Header";
import {updateDevice, deleteDevice} from "../Services/APIService";

const Popup = (props) => {
    const [data, setData] = useState({ id: props.id, name: props.name, description: props.description, disabled: props.disabled })
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const update = async () => {
        try {
            const response = await updateDevice(data)
            setSuccessMessage(response.data)
        } catch (error) {
            setErrorMessage(error)
        }
    }

    const remove = async () => {
        try {
            await deleteDevice(props.id)
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
            <Header title="Device details"/>
            {errorMessage !== "" ? <div className="alert alert-danger">{errorMessage}</div> : null}
            {successMessage !== "" ? <div className="alert alert-success">{successMessage}</div> : null}
            <Input title="ID" name="id" defaultValue={props.id} disabled={true}/>
            <Input title="Device name" name="name" defaultValue={props.name} onChange={getData} />
            <Input title="Description" name="description" defaultValue={props.description} onChange={getData} />
            <Checkbox title="Disabled" defaultChecked={props.disabled} name="disabled" onChange={getChecked} />
            <div className="btn-group">
                <Button onClick={update}>Update</Button>
                <Button onClick={remove}>Delete</Button>
            </div>
        </PopupFrame>
    );
}

export default Popup;