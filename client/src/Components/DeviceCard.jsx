const DeviceCard = (props) => {
    return (
        <>
            <div className="card" onClick={props.togglePopup}>
                <div className="card-title d-flex flex-row justify-content-between px-2 pt-2">
                    <div className="font-weight-bold">Device 1</div>
                    <div className="alert-danger px-2 py-1 rounded">DISABLED</div>
                </div>
                <div className="card-text d-flex px-2 pb-2">ID: 8723nv8dj23i8sjhi8i3</div>
            </div>
            
        </>
    );
}

export default DeviceCard;