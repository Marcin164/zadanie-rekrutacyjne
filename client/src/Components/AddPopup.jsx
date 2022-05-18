import {useState} from "react"
import Input from "./Input"
import Checkbox from "./Checkbox"
import Button from "./Button";
import PopupFrame from "../Layouts/PopupFrame";
import Header from "../Components/Header";
import {addDevice} from "../Services/APIService";
 
const AddPopup = (props) => {
    const [data, setData] = useState({name:"", description: "", disabled:false})
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const add = async () => {
        try {
            let response = await addDevice(data)
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
            <Header title="Add new device"/>
            {errorMessage !== "" ? <div className="alert alert-danger">{errorMessage}</div> : null}
            {successMessage !== "" ? <div className="alert alert-success">{successMessage}</div> : null}
            <Input title="Device name" name="name" onChange={getData} />
            <Input title="Description" name="description" onChange={getData} />
            <Checkbox title="Disabled" name="disabled" onChange={getChecked} />
            <Button onClick={add}>Add</Button>
        </PopupFrame>
        
    );
}

export default AddPopup;