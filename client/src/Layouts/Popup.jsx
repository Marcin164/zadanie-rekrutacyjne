const Popup = (props) => {
    return (
        <div className="position-fixed" >
            <div className="bg-white position-absolute">
                POPUP!
                <button onClick={props.togglePopup}>Close</button>
            </div>
        </div>
    );
}

export default Popup;