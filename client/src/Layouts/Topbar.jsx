import Button from "../Components/Button"

const Topbar = () => {
    return (
        <div className="d-flex flex-row justify-content-around align-items-center pt-2 pb-2">
            <div className="d-flex flex-row"><span className="font-weight-bold">Device list</span></div>
            <div className="d-flex flex-row justify-content-between">
                <Button className="">refresh list</Button>
                <Button className="">add device</Button>
            </div>
        </div>
    );
}

export default Topbar;