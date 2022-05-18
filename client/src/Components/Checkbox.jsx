const Checkbox = (props) => {
    return ( 
    <div>
        <input title={props.title} className="my-4" type="checkbox" name={props.name} onClick={props.onChange} role="checkbox" value={undefined} defaultChecked={props.defaultChecked}/><label className="">{props.title}</label>
    </div> 
    );
}
 
export default Checkbox;