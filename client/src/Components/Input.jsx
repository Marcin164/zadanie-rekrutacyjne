const Input = (props) => {
    return (
        <>
            <div className="mt-2">{props.title}</div>
            <input className="mt-1 p-1" type="text" defaultValue={props.defaultValue} name={props.name} onChange={props.onChange} checked={undefined} disabled={props.disabled}/>
        </>
    );
}

export default Input;