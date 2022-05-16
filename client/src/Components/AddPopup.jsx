import {useState} from "react"
import Input from "./Input"
import Checkbox from "./Checkbox"
import Button from "./Button";
import axios from "axios";
import PopupFrame from "../Layouts/PopupFrame";

const AddPopup = (props) => {
    const [data, setData] = useState({name:"", description: "", disabled:false})
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const addDevice = async () => {
        try {
            if (data.name.length < 1) throw "Name required"
            let response = await axios.post("http://localhost:4000/addDevice", data)

            if(!response) throw "Cannot save device"
            console.log(response)
            setSuccessMessage(response.data)
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
            <h1 className="mt-2">Add new device</h1>
            {errorMessage !== "" ? <div className="alert alert-danger">{errorMessage}</div> : null}
            {successMessage !== "" ? <div className="alert alert-success">{successMessage}</div> : null}
            <Input title="Device name" name="name" onChange={getData} />
            <Input title="Description" name="description" onChange={getData} />
            <Checkbox title="Disabled" name="disabled" onChange={getChecked} />
            <Button onClick={addDevice}>Add</Button>
        </PopupFrame>
        
    );
}

export default AddPopup;