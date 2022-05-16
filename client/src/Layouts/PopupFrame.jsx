import Button from "../Components/Button";

const style = { top: 50 + "%", left: 50 + "%", transform: `translate(${-50 + "%"}, ${0 + "%"})` }

const PopupFrame = (props) => {
    return (
        <div className="position-absolute fixed-top w-100 h-100" >
            <div className="card py-4 px-3 bg-white position-absolute" style={style}>
                <Button onClick={props.onClick}>Close</Button>
                {props.children}
            </div>
        </div>
    );
}

export default PopupFrame;